import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9126Component } from './my-comp-9126.component';

describe('MyComp9126Component', () => {
  let component: MyComp9126Component;
  let fixture: ComponentFixture<MyComp9126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
