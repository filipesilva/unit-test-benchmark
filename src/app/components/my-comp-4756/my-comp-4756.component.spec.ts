import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4756Component } from './my-comp-4756.component';

describe('MyComp4756Component', () => {
  let component: MyComp4756Component;
  let fixture: ComponentFixture<MyComp4756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
