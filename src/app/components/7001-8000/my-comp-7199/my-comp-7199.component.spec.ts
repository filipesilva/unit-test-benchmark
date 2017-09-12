import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7199Component } from './my-comp-7199.component';

describe('MyComp7199Component', () => {
  let component: MyComp7199Component;
  let fixture: ComponentFixture<MyComp7199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
