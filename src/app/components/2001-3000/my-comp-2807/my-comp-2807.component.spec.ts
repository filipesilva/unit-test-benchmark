import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2807Component } from './my-comp-2807.component';

describe('MyComp2807Component', () => {
  let component: MyComp2807Component;
  let fixture: ComponentFixture<MyComp2807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
