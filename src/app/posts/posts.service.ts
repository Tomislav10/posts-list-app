import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { API_BASE_URL } from '../core/tokens';
import { DEFAULT_POSTS_LIMIT } from './constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http = inject(HttpClient);
  private readonly api = inject(API_BASE_URL);

  getPosts(limit = DEFAULT_POSTS_LIMIT): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/posts`, {
      params: { _limit: String(limit) },
    });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/posts/${id}`);
  }
}
