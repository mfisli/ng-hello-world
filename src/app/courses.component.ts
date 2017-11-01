import {Component} from '@angular/core'; 
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses', //css selector
    template: `
    <h2> {{title}} </h2>
    <button class="btn btn-primary">Enroll</button>
    <ul>
        <li *ngFor="let item of listOfCourses">{{item}} </li>
    </ul>

    `
})
export class CoursesComponent{
    title = "List of Courses";
    private listOfCourses;
    
    constructor(courses: CoursesService) {
        this.listOfCourses = courses.getCourses(); 
    }

}