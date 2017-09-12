import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4711Component } from './my-comp-4711.component';

describe('MyComp4711Component', () => {
  let component: MyComp4711Component;
  let fixture: ComponentFixture<MyComp4711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
