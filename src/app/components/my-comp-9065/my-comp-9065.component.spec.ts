import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9065Component } from './my-comp-9065.component';

describe('MyComp9065Component', () => {
  let component: MyComp9065Component;
  let fixture: ComponentFixture<MyComp9065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
