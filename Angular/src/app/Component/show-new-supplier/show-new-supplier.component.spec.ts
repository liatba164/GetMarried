import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewSupplierComponent } from './show-new-supplier.component';

describe('ShowNewSupplierComponent', () => {
  let component: ShowNewSupplierComponent;
  let fixture: ComponentFixture<ShowNewSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNewSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
