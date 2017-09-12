import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4284Component } from './my-comp-4284.component';

describe('MyComp4284Component', () => {
  let component: MyComp4284Component;
  let fixture: ComponentFixture<MyComp4284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
