import { TestBed } from '@angular/core/testing';

import { ServCategoryService } from './serv-category.service';

describe('ServCategoryService', () => {
  let service: ServCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
