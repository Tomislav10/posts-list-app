import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../posts.service';
import { Observable } from 'rxjs';
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
  readonly posts$: Observable<Post[]> = this.postsService.getPosts();
}


