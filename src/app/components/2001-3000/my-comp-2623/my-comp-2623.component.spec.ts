import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2623Component } from './my-comp-2623.component';

describe('MyComp2623Component', () => {
  let component: MyComp2623Component;
  let fixture: ComponentFixture<MyComp2623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
