import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9084Component } from './my-comp-9084.component';

describe('MyComp9084Component', () => {
  let component: MyComp9084Component;
  let fixture: ComponentFixture<MyComp9084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
