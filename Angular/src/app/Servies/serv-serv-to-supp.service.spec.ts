import { TestBed } from '@angular/core/testing';

import { ServServToSuppService } from './serv-serv-to-supp.service';

describe('ServServToSuppService', () => {
  let service: ServServToSuppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServServToSuppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
