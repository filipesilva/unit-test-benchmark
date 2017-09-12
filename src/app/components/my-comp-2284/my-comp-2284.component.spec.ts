import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2284Component } from './my-comp-2284.component';

describe('MyComp2284Component', () => {
  let component: MyComp2284Component;
  let fixture: ComponentFixture<MyComp2284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
