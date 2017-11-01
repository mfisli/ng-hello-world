import { TestBed, inject } from '@angular/core/testing';

import { GitHubFollowersService } from './git-hub-followers.service';

describe('GitHubFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubFollowersService]
    });
  });

  it('should be created', inject([GitHubFollowersService], (service: GitHubFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
