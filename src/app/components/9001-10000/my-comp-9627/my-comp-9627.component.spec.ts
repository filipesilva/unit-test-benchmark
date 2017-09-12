import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9627Component } from './my-comp-9627.component';

describe('MyComp9627Component', () => {
  let component: MyComp9627Component;
  let fixture: ComponentFixture<MyComp9627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
