import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7322Component } from './my-comp-7322.component';

describe('MyComp7322Component', () => {
  let component: MyComp7322Component;
  let fixture: ComponentFixture<MyComp7322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
