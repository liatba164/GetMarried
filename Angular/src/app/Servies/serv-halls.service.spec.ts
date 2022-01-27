import { TestBed } from '@angular/core/testing';

import { ServHallsService } from './serv-halls.service';

describe('ServHallsService', () => {
  let service: ServHallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServHallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
