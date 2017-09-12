import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6287Component } from './my-comp-6287.component';

describe('MyComp6287Component', () => {
  let component: MyComp6287Component;
  let fixture: ComponentFixture<MyComp6287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
