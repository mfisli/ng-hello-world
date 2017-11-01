import { GitHubFollowersService } from './../services/git-hub-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: GitHubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }
}
