import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1199Component } from './my-comp-1199.component';

describe('MyComp1199Component', () => {
  let component: MyComp1199Component;
  let fixture: ComponentFixture<MyComp1199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
