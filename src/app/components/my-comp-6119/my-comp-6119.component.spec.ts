import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6119Component } from './my-comp-6119.component';

describe('MyComp6119Component', () => {
  let component: MyComp6119Component;
  let fixture: ComponentFixture<MyComp6119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
