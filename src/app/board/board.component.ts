import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner!: string;
  isEnglish:boolean=true;
  lang:string='en';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.newGame();

    //lang setting 
    console.log(this.isEnglish)
    this.lang=localStorage.getItem('lang')||'en';
    if(this.lang=='ar')
    this.isEnglish=false;
    else
    this.isEnglish=true;

    
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    console.log(idx);
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();

  }

  calculateWinner(): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        !!this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  //language setup
  OnChangeLang(lang:'ar'|'en'){
    if(lang=='ar')
    this.isEnglish=false;
    else
    this.isEnglish=true;

    localStorage.setItem('lang',lang);
    window.location.reload();
  }
 
}
