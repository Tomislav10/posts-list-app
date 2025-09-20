import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { switchMap, map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  readonly post$: Observable<Post> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    distinctUntilChanged(),
    switchMap(id => this.postsService.getPost(id)),
  );
}


