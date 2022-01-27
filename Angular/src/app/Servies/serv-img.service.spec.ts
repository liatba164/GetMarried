import { TestBed } from '@angular/core/testing';

import { ServImgService } from './serv-img.service';

describe('ServImgService', () => {
  let service: ServImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
