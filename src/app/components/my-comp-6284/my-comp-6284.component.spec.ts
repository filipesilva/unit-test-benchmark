import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6284Component } from './my-comp-6284.component';

describe('MyComp6284Component', () => {
  let component: MyComp6284Component;
  let fixture: ComponentFixture<MyComp6284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
