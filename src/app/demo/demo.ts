import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css']
})
export class Demo {
  title:string='Demo Component';
  @Input() message:string='Hello';
  show=true;
  constructor()
  {
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }
  toggle()
  {
    this.show=!this.show;
  }
}
