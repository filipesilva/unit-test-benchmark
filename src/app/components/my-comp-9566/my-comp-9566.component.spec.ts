import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9566Component } from './my-comp-9566.component';

describe('MyComp9566Component', () => {
  let component: MyComp9566Component;
  let fixture: ComponentFixture<MyComp9566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
