import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9718Component } from './my-comp-9718.component';

describe('MyComp9718Component', () => {
  let component: MyComp9718Component;
  let fixture: ComponentFixture<MyComp9718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
