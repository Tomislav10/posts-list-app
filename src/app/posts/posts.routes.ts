import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

export const POSTS_ROUTES: Routes = [
  { path: '', component: PostsListComponent, data: { title: 'Posts list' } },
  { path: ':id', component: PostDetailsComponent, data: { title: 'Post details' } },
];


