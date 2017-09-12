import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9457Component } from './my-comp-9457.component';

describe('MyComp9457Component', () => {
  let component: MyComp9457Component;
  let fixture: ComponentFixture<MyComp9457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
