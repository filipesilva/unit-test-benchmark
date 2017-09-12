import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9675Component } from './my-comp-9675.component';

describe('MyComp9675Component', () => {
  let component: MyComp9675Component;
  let fixture: ComponentFixture<MyComp9675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
