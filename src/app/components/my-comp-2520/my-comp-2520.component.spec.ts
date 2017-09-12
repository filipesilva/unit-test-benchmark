import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2520Component } from './my-comp-2520.component';

describe('MyComp2520Component', () => {
  let component: MyComp2520Component;
  let fixture: ComponentFixture<MyComp2520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
