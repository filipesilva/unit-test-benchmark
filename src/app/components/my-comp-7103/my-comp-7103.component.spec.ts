import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7103Component } from './my-comp-7103.component';

describe('MyComp7103Component', () => {
  let component: MyComp7103Component;
  let fixture: ComponentFixture<MyComp7103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
