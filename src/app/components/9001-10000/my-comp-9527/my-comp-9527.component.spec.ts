import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9527Component } from './my-comp-9527.component';

describe('MyComp9527Component', () => {
  let component: MyComp9527Component;
  let fixture: ComponentFixture<MyComp9527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
