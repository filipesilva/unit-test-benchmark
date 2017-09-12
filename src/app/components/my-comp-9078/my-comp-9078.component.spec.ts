import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9078Component } from './my-comp-9078.component';

describe('MyComp9078Component', () => {
  let component: MyComp9078Component;
  let fixture: ComponentFixture<MyComp9078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
