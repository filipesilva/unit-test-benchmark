import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9611Component } from './my-comp-9611.component';

describe('MyComp9611Component', () => {
  let component: MyComp9611Component;
  let fixture: ComponentFixture<MyComp9611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
