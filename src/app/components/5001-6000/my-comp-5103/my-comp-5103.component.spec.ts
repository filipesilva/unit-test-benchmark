import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5103Component } from './my-comp-5103.component';

describe('MyComp5103Component', () => {
  let component: MyComp5103Component;
  let fixture: ComponentFixture<MyComp5103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
