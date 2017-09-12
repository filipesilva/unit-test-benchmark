import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9222Component } from './my-comp-9222.component';

describe('MyComp9222Component', () => {
  let component: MyComp9222Component;
  let fixture: ComponentFixture<MyComp9222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
