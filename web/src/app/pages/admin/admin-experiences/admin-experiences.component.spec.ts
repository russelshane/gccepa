import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesComponent } from './admin-experiences.component';

describe('AdminExperiencesComponent', () => {
  let component: AdminExperiencesComponent;
  let fixture: ComponentFixture<AdminExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
