import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2611Component } from './my-comp-2611.component';

describe('MyComp2611Component', () => {
  let component: MyComp2611Component;
  let fixture: ComponentFixture<MyComp2611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
