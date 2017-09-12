import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9426Component } from './my-comp-9426.component';

describe('MyComp9426Component', () => {
  let component: MyComp9426Component;
  let fixture: ComponentFixture<MyComp9426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
