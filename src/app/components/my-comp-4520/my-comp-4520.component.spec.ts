import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4520Component } from './my-comp-4520.component';

describe('MyComp4520Component', () => {
  let component: MyComp4520Component;
  let fixture: ComponentFixture<MyComp4520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
