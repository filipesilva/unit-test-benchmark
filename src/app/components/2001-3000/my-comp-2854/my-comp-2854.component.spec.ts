import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2854Component } from './my-comp-2854.component';

describe('MyComp2854Component', () => {
  let component: MyComp2854Component;
  let fixture: ComponentFixture<MyComp2854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
