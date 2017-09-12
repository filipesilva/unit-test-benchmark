import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp220Component } from './my-comp-220.component';

describe('MyComp220Component', () => {
  let component: MyComp220Component;
  let fixture: ComponentFixture<MyComp220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
