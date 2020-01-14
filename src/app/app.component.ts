import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngCommu';
  count = 0;

  @ViewChild("c1", {static: true}) c1: Com1Component;
  // @ViewChild("c2") c2: Com2Component;

  onClickCount(){
    this.count += 1;
  }

  onCom1Reset(val){
    this.count = val;
  }

  onTest(){
    this.c1.count = 111;
  }
}
