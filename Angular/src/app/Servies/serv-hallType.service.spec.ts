import { TestBed } from '@angular/core/testing';

import { ServHallTypeService } from './serv-hallType.service';

describe('ServHallTypeService', () => {
  let service: ServHallTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServHallTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
