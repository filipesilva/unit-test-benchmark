import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7163Component } from './my-comp-7163.component';

describe('MyComp7163Component', () => {
  let component: MyComp7163Component;
  let fixture: ComponentFixture<MyComp7163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
