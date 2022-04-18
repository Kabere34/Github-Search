import { TestBed } from '@angular/core/testing';

import { GitCallService } from './gitcall.service';

describe('GitCallService', () => {
  let service: GitCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
