import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9238Component } from './my-comp-9238.component';

describe('MyComp9238Component', () => {
  let component: MyComp9238Component;
  let fixture: ComponentFixture<MyComp9238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
