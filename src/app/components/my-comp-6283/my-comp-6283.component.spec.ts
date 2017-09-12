import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6283Component } from './my-comp-6283.component';

describe('MyComp6283Component', () => {
  let component: MyComp6283Component;
  let fixture: ComponentFixture<MyComp6283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
