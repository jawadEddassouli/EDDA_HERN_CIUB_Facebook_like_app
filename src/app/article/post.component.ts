import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model'; //Non cancellare gli altri import


@Component({
  selector: 'app-post', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() post:Post;
  show : boolean = false;
  lungezza : number = 0;
  constructor() {
  }

  miPiace(): Boolean {
    this.post.miPiace(); //Modificato qui 
    return false;
  }
  mostra(){
    this.show = !this.show;
  }
  aggiungiCommento(commento : HTMLInputElement){
    this.contaCommenti()
    this.post.commenti.push(commento.value)
    console.log(this.post.commenti)
  }
  ngOnInit() {}
  contaCommenti(){
    this.lungezza = this.post.commenti.length +1 
  }
}

