import { Component, OnInit } from '@angular/core';

// declare var renderMe:any;
declare var update: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title : 'app';
  content = ''
  render(){
      new update(this.content, 'output');
    }
}