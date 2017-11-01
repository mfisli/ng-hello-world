import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  template: `
  <input [(ngModel)]="titleCaseResult"/> <br />
  <p>{{titleCaseResult | titleCase}}</p>
  
  `,
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  titleCaseResult = "";

  constructor() { }

  ngOnInit() {
  }

}
