import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './article/post.component';
import { ComComponent } from './com/com.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ComComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }











