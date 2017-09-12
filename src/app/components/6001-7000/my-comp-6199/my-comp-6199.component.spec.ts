import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6199Component } from './my-comp-6199.component';

describe('MyComp6199Component', () => {
  let component: MyComp6199Component;
  let fixture: ComponentFixture<MyComp6199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
