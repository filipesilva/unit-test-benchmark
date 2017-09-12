import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp191Component } from './my-comp-191.component';

describe('MyComp191Component', () => {
  let component: MyComp191Component;
  let fixture: ComponentFixture<MyComp191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
