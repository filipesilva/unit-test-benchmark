import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4833Component } from './my-comp-4833.component';

describe('MyComp4833Component', () => {
  let component: MyComp4833Component;
  let fixture: ComponentFixture<MyComp4833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
