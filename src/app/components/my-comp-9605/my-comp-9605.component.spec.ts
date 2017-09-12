import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9605Component } from './my-comp-9605.component';

describe('MyComp9605Component', () => {
  let component: MyComp9605Component;
  let fixture: ComponentFixture<MyComp9605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
