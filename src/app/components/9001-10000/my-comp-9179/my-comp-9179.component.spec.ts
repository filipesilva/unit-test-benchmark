import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9179Component } from './my-comp-9179.component';

describe('MyComp9179Component', () => {
  let component: MyComp9179Component;
  let fixture: ComponentFixture<MyComp9179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
