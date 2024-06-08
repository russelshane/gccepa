import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRewardsComponent } from './user-rewards.component';

describe('UserRewardsComponent', () => {
  let component: UserRewardsComponent;
  let fixture: ComponentFixture<UserRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRewardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
