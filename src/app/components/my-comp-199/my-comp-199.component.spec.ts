import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp199Component } from './my-comp-199.component';

describe('MyComp199Component', () => {
  let component: MyComp199Component;
  let fixture: ComponentFixture<MyComp199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
