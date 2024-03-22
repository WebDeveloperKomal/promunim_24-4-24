import { TestBed } from '@angular/core/testing';

import { SidenavtoggleService } from './sidenavtoggle.service';

describe('SidenavtoggleService', () => {
  let service: SidenavtoggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavtoggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
