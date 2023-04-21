import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BlogsComponent } from './blogs/blogs.component';
import { Art1Component } from './art1/art1.component';
import { Art2Component } from './art2/art2.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BlogsComponent,
    Art1Component,
    Art2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
