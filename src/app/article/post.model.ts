export class Post {
    autore: string;
    testo: string;
    like: number;
    commenti: string[];
  
    constructor(autore: string, testo: string, like?: number,commenti?: string[]) {
      this.autore = autore;
      this.testo = testo;
      this.like = like || 0;
      this.commenti = commenti || [];
    }
 
    miPiace(): void {
        this.like += 1;
      }
}