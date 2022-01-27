import { TestBed } from '@angular/core/testing';

import { ServTasksToCustomerService } from './serv-tasks-to-customer.service';

describe('ServTasksToCustomerService', () => {
  let service: ServTasksToCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTasksToCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
