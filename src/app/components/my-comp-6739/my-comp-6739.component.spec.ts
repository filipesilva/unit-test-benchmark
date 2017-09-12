import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6739Component } from './my-comp-6739.component';

describe('MyComp6739Component', () => {
  let component: MyComp6739Component;
  let fixture: ComponentFixture<MyComp6739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
