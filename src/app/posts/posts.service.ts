import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
    private readonly api = 'https://jsonplaceholder.typicode.com';

    constructor(private readonly http: HttpClient) {}

    getPosts(limit = 10): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.api}/posts`, { params: { _limit: limit } as any });
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.api}/posts/${id}`);
    }
}