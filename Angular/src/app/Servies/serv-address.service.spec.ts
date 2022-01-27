import { TestBed } from '@angular/core/testing';

import { ServAddressService } from './serv-address.service';

describe('ServAddressService', () => {
  let service: ServAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
