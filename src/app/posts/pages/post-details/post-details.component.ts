import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly postsService = inject(PostsService);

  readonly post$: Observable<Post> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.postsService.getPost(id)),
  );

  ngOnInit(): void {
    this.post$.subscribe(post => {
      console.log(post);
    });
  }
}


