import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountSettingComponent } from './profile-account-setting.component';

describe('ProfileAccountSettingComponent', () => {
  let component: ProfileAccountSettingComponent;
  let fixture: ComponentFixture<ProfileAccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
