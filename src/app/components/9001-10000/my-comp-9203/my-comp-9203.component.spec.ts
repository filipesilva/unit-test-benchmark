import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9203Component } from './my-comp-9203.component';

describe('MyComp9203Component', () => {
  let component: MyComp9203Component;
  let fixture: ComponentFixture<MyComp9203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
