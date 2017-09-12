import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9968Component } from './my-comp-9968.component';

describe('MyComp9968Component', () => {
  let component: MyComp9968Component;
  let fixture: ComponentFixture<MyComp9968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
