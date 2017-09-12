import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9866Component } from './my-comp-9866.component';

describe('MyComp9866Component', () => {
  let component: MyComp9866Component;
  let fixture: ComponentFixture<MyComp9866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
