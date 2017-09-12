import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6839Component } from './my-comp-6839.component';

describe('MyComp6839Component', () => {
  let component: MyComp6839Component;
  let fixture: ComponentFixture<MyComp6839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
