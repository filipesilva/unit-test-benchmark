import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5301Component } from './my-comp-5301.component';

describe('MyComp5301Component', () => {
  let component: MyComp5301Component;
  let fixture: ComponentFixture<MyComp5301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
