import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2197Component } from './my-comp-2197.component';

describe('MyComp2197Component', () => {
  let component: MyComp2197Component;
  let fixture: ComponentFixture<MyComp2197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
