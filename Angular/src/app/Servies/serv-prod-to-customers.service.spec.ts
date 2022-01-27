import { TestBed } from '@angular/core/testing';

import { ServProdToCustomersService } from './serv-prod-to-customers.service';

describe('ServProdToCustomersService', () => {
  let service: ServProdToCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServProdToCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
