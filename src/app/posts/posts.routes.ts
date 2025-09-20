import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

export const POSTS_ROUTES: Routes = [
  { path: '', component: PostsListComponent },
  { path: ':id', component: PostDetailsComponent },
];


