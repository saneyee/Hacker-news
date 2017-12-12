import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerComponent } from './hacker/hacker.component';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowComponent } from './show/show.component';




const appRoutes: Routes = [
  {
      path: '',
      component: HackerComponent
    },
    {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
