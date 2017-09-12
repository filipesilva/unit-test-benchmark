import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9894Component } from './my-comp-9894.component';

describe('MyComp9894Component', () => {
  let component: MyComp9894Component;
  let fixture: ComponentFixture<MyComp9894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
