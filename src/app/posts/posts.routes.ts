import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { ROUTE_TITLES_CONST } from '../core/constants';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    component: PostsListComponent,
    data: { subtitle: ROUTE_TITLES_CONST.POST_LIST },
  },
  {
    path: ':id',
    component: PostDetailsComponent,
    data: { subtitle: ROUTE_TITLES_CONST.POST_DETAILS },
  },
];
