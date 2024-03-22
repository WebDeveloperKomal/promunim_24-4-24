import { TestBed } from '@angular/core/testing';

import { GooglechartService } from './googlechart.service';

describe('GooglechartService', () => {
  let service: GooglechartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglechartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
