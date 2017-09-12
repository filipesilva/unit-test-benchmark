import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9375Component } from './my-comp-9375.component';

describe('MyComp9375Component', () => {
  let component: MyComp9375Component;
  let fixture: ComponentFixture<MyComp9375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
