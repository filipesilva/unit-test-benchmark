import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9114Component } from './my-comp-9114.component';

describe('MyComp9114Component', () => {
  let component: MyComp9114Component;
  let fixture: ComponentFixture<MyComp9114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
