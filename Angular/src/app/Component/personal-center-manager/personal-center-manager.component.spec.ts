import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCenterManagerComponent } from './personal-center-manager.component';

describe('PersonalCenterManagerComponent', () => {
  let component: PersonalCenterManagerComponent;
  let fixture: ComponentFixture<PersonalCenterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCenterManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCenterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
