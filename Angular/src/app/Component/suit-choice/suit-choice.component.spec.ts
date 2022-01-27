import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitChoiceComponent } from './suit-choice.component';

describe('SuitChoiceComponent', () => {
  let component: SuitChoiceComponent;
  let fixture: ComponentFixture<SuitChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
