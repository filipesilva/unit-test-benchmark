import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9863Component } from './my-comp-9863.component';

describe('MyComp9863Component', () => {
  let component: MyComp9863Component;
  let fixture: ComponentFixture<MyComp9863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
