import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToCustomersComponent } from './products-to-customers.component';

describe('ProductsToCustomersComponent', () => {
  let component: ProductsToCustomersComponent;
  let fixture: ComponentFixture<ProductsToCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsToCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsToCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
