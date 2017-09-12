import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2617Component } from './my-comp-2617.component';

describe('MyComp2617Component', () => {
  let component: MyComp2617Component;
  let fixture: ComponentFixture<MyComp2617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
