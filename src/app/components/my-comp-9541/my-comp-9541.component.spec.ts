import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9541Component } from './my-comp-9541.component';

describe('MyComp9541Component', () => {
  let component: MyComp9541Component;
  let fixture: ComponentFixture<MyComp9541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
