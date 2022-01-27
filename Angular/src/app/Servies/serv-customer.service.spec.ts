import { TestBed } from '@angular/core/testing';
import { ServCustomerService } from './serv-customer.service';

describe('ServCustomerService', () => {
  let service: ServCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
