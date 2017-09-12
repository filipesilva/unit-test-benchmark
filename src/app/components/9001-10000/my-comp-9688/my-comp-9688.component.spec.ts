import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9688Component } from './my-comp-9688.component';

describe('MyComp9688Component', () => {
  let component: MyComp9688Component;
  let fixture: ComponentFixture<MyComp9688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
