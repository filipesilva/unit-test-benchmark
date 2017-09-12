import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4754Component } from './my-comp-4754.component';

describe('MyComp4754Component', () => {
  let component: MyComp4754Component;
  let fixture: ComponentFixture<MyComp4754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
