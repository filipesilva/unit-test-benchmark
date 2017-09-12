import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2264Component } from './my-comp-2264.component';

describe('MyComp2264Component', () => {
  let component: MyComp2264Component;
  let fixture: ComponentFixture<MyComp2264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
