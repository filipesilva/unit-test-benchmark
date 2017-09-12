import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4199Component } from './my-comp-4199.component';

describe('MyComp4199Component', () => {
  let component: MyComp4199Component;
  let fixture: ComponentFixture<MyComp4199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
