import { Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ViewChild,
  ElementRef,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ContentChild} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css']
})
export class Demo implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  title:string='Demo Component';
  @Input() message!:string;
  @ViewChild('temp') tempPara!:ElementRef;
  @ContentChild('temp') paraContent!:ElementRef;
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
    console.log('In ngDoCheck',this.paraContent);
  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit Hook called');
    console.log('In ngAfterContentInit',this.paraContent.nativeElement);
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked Hook called');
    console.log('In ngAfterContentChecked',this.tempPara);
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit Hook called');
    console.log('In ngAfterViewInit',this.tempPara);
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Hook called');
    console.log(this.tempPara.nativeElement.textContent);
  }
}
