import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6238Component } from './my-comp-6238.component';

describe('MyComp6238Component', () => {
  let component: MyComp6238Component;
  let fixture: ComponentFixture<MyComp6238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
