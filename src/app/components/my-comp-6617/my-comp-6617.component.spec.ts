import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6617Component } from './my-comp-6617.component';

describe('MyComp6617Component', () => {
  let component: MyComp6617Component;
  let fixture: ComponentFixture<MyComp6617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
