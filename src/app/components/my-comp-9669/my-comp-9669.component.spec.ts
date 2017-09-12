import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9669Component } from './my-comp-9669.component';

describe('MyComp9669Component', () => {
  let component: MyComp9669Component;
  let fixture: ComponentFixture<MyComp9669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
