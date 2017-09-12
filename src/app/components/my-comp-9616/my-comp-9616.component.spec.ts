import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9616Component } from './my-comp-9616.component';

describe('MyComp9616Component', () => {
  let component: MyComp9616Component;
  let fixture: ComponentFixture<MyComp9616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
