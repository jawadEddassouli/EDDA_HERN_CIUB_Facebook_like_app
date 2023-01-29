export class Post {
    autore: string;
    testo: string;
    like: number;
  
    constructor(autore: string, testo: string, like?: number) {
      this.autore = autore;
      this.testo = testo;
      this.like = like || 0;
    }
 
    miPiace(): void {
        this.like += 1;
      }
}