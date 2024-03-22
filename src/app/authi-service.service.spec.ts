import { TestBed } from '@angular/core/testing';

import { AuthiServiceService } from './authi-service.service';

describe('AuthiServiceService', () => {
  let service: AuthiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
