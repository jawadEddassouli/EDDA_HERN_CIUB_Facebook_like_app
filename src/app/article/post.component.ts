import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model'; //Non cancellare gli altri import


@Component({
  selector: 'app-post', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() post:Post;

  constructor() {
  }

  miPiace(): Boolean {
    this.post.miPiace(); //Modificato qui 
    return false;
  }

  ngOnInit() {}
}

