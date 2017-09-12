import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp284Component } from './my-comp-284.component';

describe('MyComp284Component', () => {
  let component: MyComp284Component;
  let fixture: ComponentFixture<MyComp284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
