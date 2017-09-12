import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9717Component } from './my-comp-9717.component';

describe('MyComp9717Component', () => {
  let component: MyComp9717Component;
  let fixture: ComponentFixture<MyComp9717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
