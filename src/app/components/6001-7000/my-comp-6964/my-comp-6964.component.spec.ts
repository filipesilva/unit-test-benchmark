import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6964Component } from './my-comp-6964.component';

describe('MyComp6964Component', () => {
  let component: MyComp6964Component;
  let fixture: ComponentFixture<MyComp6964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
