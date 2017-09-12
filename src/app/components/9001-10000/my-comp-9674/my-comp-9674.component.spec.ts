import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9674Component } from './my-comp-9674.component';

describe('MyComp9674Component', () => {
  let component: MyComp9674Component;
  let fixture: ComponentFixture<MyComp9674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
