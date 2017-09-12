import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5199Component } from './my-comp-5199.component';

describe('MyComp5199Component', () => {
  let component: MyComp5199Component;
  let fixture: ComponentFixture<MyComp5199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
