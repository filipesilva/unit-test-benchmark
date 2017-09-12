import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9340Component } from './my-comp-9340.component';

describe('MyComp9340Component', () => {
  let component: MyComp9340Component;
  let fixture: ComponentFixture<MyComp9340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
