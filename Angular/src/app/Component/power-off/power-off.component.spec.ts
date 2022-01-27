import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOffComponent } from './power-off.component';

describe('PowerOffComponent', () => {
  let component: PowerOffComponent;
  let fixture: ComponentFixture<PowerOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
