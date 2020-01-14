import { Component, OnInit, Input, Inject, forwardRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {


  @Input("count_com2") count = 0;
  constructor(@Inject(forwardRef(()=>AppComponent))private app: AppComponent) { }

  ngOnInit() {
  }

  onclickSettext(){
    this.app.title = 'asddsa';
  }

}
