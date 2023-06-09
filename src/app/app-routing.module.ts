import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'blog', component: BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
