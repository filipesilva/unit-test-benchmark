import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4238Component } from './my-comp-4238.component';

describe('MyComp4238Component', () => {
  let component: MyComp4238Component;
  let fixture: ComponentFixture<MyComp4238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
