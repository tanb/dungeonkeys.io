import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent} from './blog.component';
import { PostListComponent } from 'src/app/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
