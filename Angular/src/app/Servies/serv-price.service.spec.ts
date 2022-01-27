import { TestBed } from '@angular/core/testing';

import { ServPriceService } from './serv-price.service';

describe('ServPriceService', () => {
  let service: ServPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
