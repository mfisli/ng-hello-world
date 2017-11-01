import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  template: `
  <p> Likes Counter </p>
    <span (click)="onClick()"
      class="glyphicon glyphicon-heart"
      [style.color]="isActive ? 'deeppink' : '#ccc' "></span> {{likesCount}} 
  `,
  styles: [`
    .glyphicon {
      font-size: 4em;
    }
  `]
})
export class LikeComponent implements OnInit {
  @Input("likesCount") likesCount: number;
  @Input("isActive") isActive: boolean;
  @Output("change") change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
    this.change.emit({isActive:this.isActive, likesCount: this.likesCount});
  }
  constructor() { }

  ngOnInit() {
  }

}
