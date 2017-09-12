import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4438Component } from './my-comp-4438.component';

describe('MyComp4438Component', () => {
  let component: MyComp4438Component;
  let fixture: ComponentFixture<MyComp4438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
