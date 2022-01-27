import { TestBed } from '@angular/core/testing';

import { ServInvitedService } from '../Servies/serv-invited.service';

describe('ServInvitedService', () => {
  let service: ServInvitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServInvitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
