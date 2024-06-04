import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInUserComponent } from './logged-in-user.component';

describe('LoggedInUserComponent', () => {
  let component: LoggedInUserComponent;
  let fixture: ComponentFixture<LoggedInUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
