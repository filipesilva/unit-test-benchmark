import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp498Component } from './my-comp-498.component';

describe('MyComp498Component', () => {
  let component: MyComp498Component;
  let fixture: ComponentFixture<MyComp498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
