import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7617Component } from './my-comp-7617.component';

describe('MyComp7617Component', () => {
  let component: MyComp7617Component;
  let fixture: ComponentFixture<MyComp7617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
