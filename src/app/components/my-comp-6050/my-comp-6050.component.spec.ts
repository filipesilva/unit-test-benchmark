import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6050Component } from './my-comp-6050.component';

describe('MyComp6050Component', () => {
  let component: MyComp6050Component;
  let fixture: ComponentFixture<MyComp6050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
