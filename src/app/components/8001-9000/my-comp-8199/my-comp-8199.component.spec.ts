import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8199Component } from './my-comp-8199.component';

describe('MyComp8199Component', () => {
  let component: MyComp8199Component;
  let fixture: ComponentFixture<MyComp8199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
