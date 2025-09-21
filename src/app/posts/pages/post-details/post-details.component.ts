import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  switchMap,
  map,
  distinctUntilChanged,
  finalize,
  catchError,
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [AsyncPipe, MatCardModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly postsService = inject(PostsService);
  readonly $loading = signal(false);
  readonly $error = signal(false);

  readonly post$: Observable<Post | null> = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    distinctUntilChanged(),
    switchMap((id) => {
      this.$loading.set(true);
      this.$error.set(false);
      return this.postsService.getPost(id).pipe(
        catchError(() => {
          this.$error.set(true);
          return of(null);
        }),
        finalize(() => this.$loading.set(false)),
      );
    }),
  );
}
