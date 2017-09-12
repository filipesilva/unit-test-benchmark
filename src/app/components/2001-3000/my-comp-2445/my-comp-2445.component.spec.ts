import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2445Component } from './my-comp-2445.component';

describe('MyComp2445Component', () => {
  let component: MyComp2445Component;
  let fixture: ComponentFixture<MyComp2445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
