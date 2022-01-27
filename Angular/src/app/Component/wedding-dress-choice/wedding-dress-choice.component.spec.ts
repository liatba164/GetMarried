import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDressChoiceComponent } from './wedding-dress-choice.component';

describe('WeddingDressChoiceComponent', () => {
  let component: WeddingDressChoiceComponent;
  let fixture: ComponentFixture<WeddingDressChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingDressChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDressChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
