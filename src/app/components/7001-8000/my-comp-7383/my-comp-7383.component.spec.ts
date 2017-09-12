import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7383Component } from './my-comp-7383.component';

describe('MyComp7383Component', () => {
  let component: MyComp7383Component;
  let fixture: ComponentFixture<MyComp7383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
