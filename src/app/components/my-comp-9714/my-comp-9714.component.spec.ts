import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9714Component } from './my-comp-9714.component';

describe('MyComp9714Component', () => {
  let component: MyComp9714Component;
  let fixture: ComponentFixture<MyComp9714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
