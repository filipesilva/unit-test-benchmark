import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4646Component } from './my-comp-4646.component';

describe('MyComp4646Component', () => {
  let component: MyComp4646Component;
  let fixture: ComponentFixture<MyComp4646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
