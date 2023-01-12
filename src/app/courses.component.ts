import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
         <h2>{{siteUrl}}</h2>
         <ul>
            <li *ngFor="let course of courses">
            {{ "Welcome " + course.toUpperCase() }}
            </li>
         </ul>
         <input #myId [id] = "myId" type="text" value="kevine">
    `
})
export class CoursesComponent {

    title = "Hello, this is my course";
    myId = "KraPin";
    courses; 
    siteUrl = window.location.href;

    constructor(service: CoursesService){
        //let service = new CoursesService ()
        this.courses = service.getCourses();
    }

    getTitle () {
        return this.title;
    }
    
}