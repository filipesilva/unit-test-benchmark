import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6857Component } from './my-comp-6857.component';

describe('MyComp6857Component', () => {
  let component: MyComp6857Component;
  let fixture: ComponentFixture<MyComp6857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
