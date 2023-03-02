import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticTacToe';
  isEnglish:boolean=true;
  lang='en'
  constructor(private translateService:TranslateService){
    this.lang=localStorage.getItem('lang')||'en';
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.lang);
  }
  ngOnInit(): void {
    if(this.lang=='ar')
    this.isEnglish=false;
    else
    this.isEnglish=true;
  }
}
