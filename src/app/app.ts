import { Component } from '@angular/core';
import { Demo } from './demo/demo';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports:[Demo]
})
export class App {
  title='angular-lifecycle-hook';
  inputVal:string='';
  constructor()
  {
    console.log('App Component constructor called!');
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit Hook of app component called');
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Hook of app component called');
  }
  onBtnClicked(inputEl :HTMLInputElement)
  {
    this.inputVal=inputEl.value;
  }
}
