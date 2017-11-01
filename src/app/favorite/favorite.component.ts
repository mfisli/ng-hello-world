import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <span class="glyphicon" 
      [ngClass] = "{
        'glyphicon-star': isActive, 
        'glyphicon-star-empty': !isActive
      }"
      (click)="toggleActive()"> </span>
  `,
//   template: `
//   <span class="glyphicon" 
//     [class.glyphicon-star]="isActive" 
//     [class.glyphicon-star-empty]="!isActive"
//     (click)="toggleActive()"> </span>
// `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isActive = false;
  toggleActive(){
    this.isActive = !this.isActive;
  }
  constructor() { }

  ngOnInit() {
  }

}
