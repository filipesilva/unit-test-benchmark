import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9119Component } from './my-comp-9119.component';

describe('MyComp9119Component', () => {
  let component: MyComp9119Component;
  let fixture: ComponentFixture<MyComp9119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
