import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2199Component } from './my-comp-2199.component';

describe('MyComp2199Component', () => {
  let component: MyComp2199Component;
  let fixture: ComponentFixture<MyComp2199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
