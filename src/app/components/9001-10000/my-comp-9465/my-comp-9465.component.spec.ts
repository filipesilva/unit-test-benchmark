import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9465Component } from './my-comp-9465.component';

describe('MyComp9465Component', () => {
  let component: MyComp9465Component;
  let fixture: ComponentFixture<MyComp9465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
