import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForBrideComponent } from './tips-for-bride.component';

describe('TipsForBrideComponent', () => {
  let component: TipsForBrideComponent;
  let fixture: ComponentFixture<TipsForBrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsForBrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsForBrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
