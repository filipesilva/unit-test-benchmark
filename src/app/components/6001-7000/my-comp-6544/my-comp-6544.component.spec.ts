import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6544Component } from './my-comp-6544.component';

describe('MyComp6544Component', () => {
  let component: MyComp6544Component;
  let fixture: ComponentFixture<MyComp6544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
