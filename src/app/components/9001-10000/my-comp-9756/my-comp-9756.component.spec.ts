import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9756Component } from './my-comp-9756.component';

describe('MyComp9756Component', () => {
  let component: MyComp9756Component;
  let fixture: ComponentFixture<MyComp9756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
