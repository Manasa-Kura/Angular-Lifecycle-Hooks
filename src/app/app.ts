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
  constructor()
  {
    console.log('App Component constructor called!');
  }
}
