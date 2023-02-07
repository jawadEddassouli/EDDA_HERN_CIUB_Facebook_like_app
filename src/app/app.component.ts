import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './article/post.model'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDDA_HERN_CIUB_Facebook_like_app';
 

  post:Post[];   // <-- component property
  constructor(public http: HttpClient){
    this.post = [new Post('JAWAD', 'ciao a tutti', 1)];
    this.http.get<any>('https://my-json-server.typicode.com/jawadEddassouli/FACEBOOK/post').subscribe((response) =>{
  
      for(let a of response){
        this.post.push(new Post(a['autore'],a['testo'],a['like'],a['commenti']))
      }
  
    });
  }

  
  aggiungi(autore: HTMLInputElement, testo: HTMLInputElement): boolean {
    console.log(`Adding posts autore: ${autore.value} and testo: ${testo.value}`);
    this.post.push(new Post(autore.value, testo.value, 0));
    console.log(this.post);
    //pulisco i campi della form
    autore.value = '';
    testo.value = '';
    return false;
  }

  sortedPost(): Post[] {
    return this.post.sort((a: Post, b: Post) => b.like - a.like);
  }
}