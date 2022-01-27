import { TestBed } from '@angular/core/testing';

import { ServTasksService } from './serv-tasks.service';

describe('ServTasksService', () => {
  let service: ServTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
