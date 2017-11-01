import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
    <h2> {{title}} </h2>
    <ul>
      <li *ngFor = "let author of listOfAuthors"> {{author}} <favorite></favorite></li>
    </ul>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = "";
  listOfAuthors: String[];

  constructor(author: AuthorsService) { 
    this.listOfAuthors = author.getAuthors();
    this.title = this.listOfAuthors.length + " Authors";
  }

  ngOnInit() {
  }

}
