import { TestBed } from '@angular/core/testing';

import { ServSuppliersService } from './serv-suppliers.service';

describe('ServSuppliersService', () => {
  let service: ServSuppliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServSuppliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
