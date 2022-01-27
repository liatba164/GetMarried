import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSuppliersComponent } from './filter-suppliers.component';

describe('FilterSuppliersComponent', () => {
  let component: FilterSuppliersComponent;
  let fixture: ComponentFixture<FilterSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
