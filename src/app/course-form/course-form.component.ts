import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  submit(f){
    console.log("asdf");
    console.log(f);
  }
  guaranteeText:string = "30-day-money-back-guarantee";
  coursesTypes = [
    {id:1, type:'Developement'},
    {id:2, type: "Art"},
    {id:3, type: "Language"}
  ];
}
