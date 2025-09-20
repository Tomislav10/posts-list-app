import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'posts' },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.routes').then(m => m.POSTS_ROUTES),
      },
    ],
  },
  { path: '**', redirectTo: 'posts' },
];
