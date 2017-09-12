import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9302Component } from './my-comp-9302.component';

describe('MyComp9302Component', () => {
  let component: MyComp9302Component;
  let fixture: ComponentFixture<MyComp9302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
