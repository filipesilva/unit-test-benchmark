import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6556Component } from './my-comp-6556.component';

describe('MyComp6556Component', () => {
  let component: MyComp6556Component;
  let fixture: ComponentFixture<MyComp6556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
