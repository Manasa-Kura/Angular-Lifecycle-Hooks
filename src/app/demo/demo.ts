import { Component,Input,OnChanges,SimpleChange, SimpleChanges,OnInit, viewChild, ElementRef, ViewChild , DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css']
})
export class Demo implements OnChanges,OnInit,DoCheck{
  title:string='Demo Component';
  @Input() message!:string;
  @ViewChild('temp') tempPara!:ElementRef;
  show=true;
  constructor()
  {
    console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }
  //adding ngOnInit
  ngOnInit()
  {
    console.log('ngOnInit Hook called');
  }
  ngDoCheck()
  {
    console.log('ngDoCheck Hook called');
  }
}
