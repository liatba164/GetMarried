import { TestBed } from '@angular/core/testing';

import { ServOpinionService } from './serv-opinion.service';

describe('ServOpinionService', () => {
  let service: ServOpinionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServOpinionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
