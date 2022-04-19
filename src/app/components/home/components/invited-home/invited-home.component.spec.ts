import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedHomeComponent } from './invited-home.component';

describe('InvitedHomeComponent', () => {
  let component: InvitedHomeComponent;
  let fixture: ComponentFixture<InvitedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
