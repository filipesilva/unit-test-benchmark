import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6886Component } from './my-comp-6886.component';

describe('MyComp6886Component', () => {
  let component: MyComp6886Component;
  let fixture: ComponentFixture<MyComp6886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
