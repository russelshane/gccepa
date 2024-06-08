import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperiencesComponent } from './user-experiences.component';

describe('UserExperiencesComponent', () => {
  let component: UserExperiencesComponent;
  let fixture: ComponentFixture<UserExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
