import { TestBed } from '@angular/core/testing';

import { TidService } from './tid.service';

describe('TidService', () => {
  let service: TidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
