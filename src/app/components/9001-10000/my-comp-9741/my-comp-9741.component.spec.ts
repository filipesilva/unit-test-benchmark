import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9741Component } from './my-comp-9741.component';

describe('MyComp9741Component', () => {
  let component: MyComp9741Component;
  let fixture: ComponentFixture<MyComp9741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
