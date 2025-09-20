import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DEFAULT_POSTS_LIMIT, PostsService } from '../../posts.service';
import { Observable, defer } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Post } from '../../models/post.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, MatCardModule, MatIconModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListComponent {
  private readonly postsService = inject(PostsService);
  readonly $loading = signal(false);
  readonly skeletons = Array.from({ length: DEFAULT_POSTS_LIMIT });
  
  readonly posts$: Observable<Post[]> = defer(() => {
    this.$loading.set(true);
    return this.postsService
      .getPosts()
      .pipe(finalize(() => this.$loading.set(false)));
  });
}


