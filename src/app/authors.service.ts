import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  listOfAuthors: String[];
  constructor() { 
    this.listOfAuthors = [
      "auth1", "auth2", "auth3", "auth4"
    ]
  }
  getAuthors = () => this.listOfAuthors;

}
