import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2846Component } from './my-comp-2846.component';

describe('MyComp2846Component', () => {
  let component: MyComp2846Component;
  let fixture: ComponentFixture<MyComp2846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
