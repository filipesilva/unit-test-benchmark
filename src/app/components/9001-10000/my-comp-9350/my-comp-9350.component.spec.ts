import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9350Component } from './my-comp-9350.component';

describe('MyComp9350Component', () => {
  let component: MyComp9350Component;
  let fixture: ComponentFixture<MyComp9350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
