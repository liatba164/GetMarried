import { TestBed } from '@angular/core/testing';

import { ServKashrutService } from './serv-kashrut.service';

describe('ServKashrutService', () => {
  let service: ServKashrutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServKashrutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
