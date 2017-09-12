import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9833Component } from './my-comp-9833.component';

describe('MyComp9833Component', () => {
  let component: MyComp9833Component;
  let fixture: ComponentFixture<MyComp9833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
