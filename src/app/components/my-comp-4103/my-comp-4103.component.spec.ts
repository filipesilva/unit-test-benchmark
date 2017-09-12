import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4103Component } from './my-comp-4103.component';

describe('MyComp4103Component', () => {
  let component: MyComp4103Component;
  let fixture: ComponentFixture<MyComp4103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
