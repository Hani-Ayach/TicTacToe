import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button class="btn" nbButton *ngIf="!value">{{value}}</button>
 <button class="btn" nbButton hero status="success"  *ngIf="value=='X'">{{value}}</button>
 <button class="btn" nbButton hero status="info"   *ngIf="value=='O'">{{value}}</button>

`,
styles: [
  `.btn{
    width: 100%;
    height: 100%;
    font-size:xxx-large;
    font-weight: bold;
  }`
]

})
export class SquareComponent {

  @Input() value: 'X' | 'O'|''='';

}
