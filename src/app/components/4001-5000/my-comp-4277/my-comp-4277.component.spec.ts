import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4277Component } from './my-comp-4277.component';

describe('MyComp4277Component', () => {
  let component: MyComp4277Component;
  let fixture: ComponentFixture<MyComp4277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
