import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { RouteTitles } from '../core/constants';

export const POSTS_ROUTES: Routes = [
  { path: '', component: PostsListComponent, data: { subtitle: RouteTitles.POST_LIST } },
  { path: ':id', component: PostDetailsComponent, data: { subtitle: RouteTitles.POST_DETAILS } },
];


