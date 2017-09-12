import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5322Component } from './my-comp-5322.component';

describe('MyComp5322Component', () => {
  let component: MyComp5322Component;
  let fixture: ComponentFixture<MyComp5322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
