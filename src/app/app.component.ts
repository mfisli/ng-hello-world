import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing Playground';
	courses = [
      { name:'couse1'},
      { name:'couse2'},
      { name:'couse3'}
    ];
    onRemove(course){
      let index = this.courses.indexOf(course);
      console.log(index);
      this.courses.splice(index,1);
    }
  }
