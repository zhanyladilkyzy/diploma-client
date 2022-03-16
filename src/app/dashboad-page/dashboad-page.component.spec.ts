import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadPageComponent } from './dashboad-page.component';

describe('DashboadPageComponent', () => {
  let component: DashboadPageComponent;
  let fixture: ComponentFixture<DashboadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
