import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  readonly posts$: Observable<Post[]> = this.postsService.getPosts(10);

  ngOnInit(): void {
    this.posts$.subscribe(posts => {
      console.log(posts);
    });
  }
}


