import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9174Component } from './my-comp-9174.component';

describe('MyComp9174Component', () => {
  let component: MyComp9174Component;
  let fixture: ComponentFixture<MyComp9174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
