import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7626Component } from './my-comp-7626.component';

describe('MyComp7626Component', () => {
  let component: MyComp7626Component;
  let fixture: ComponentFixture<MyComp7626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
