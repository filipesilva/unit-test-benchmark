import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9Component } from './my-comp-9.component';

describe('MyComp9Component', () => {
  let component: MyComp9Component;
  let fixture: ComponentFixture<MyComp9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
