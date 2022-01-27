import { TestBed } from '@angular/core/testing';

import { ServAreaService } from './serv-area.service';

describe('ServAreaService', () => {
  let service: ServAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
