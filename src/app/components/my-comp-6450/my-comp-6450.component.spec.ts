import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6450Component } from './my-comp-6450.component';

describe('MyComp6450Component', () => {
  let component: MyComp6450Component;
  let fixture: ComponentFixture<MyComp6450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
