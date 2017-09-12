import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9199Component } from './my-comp-9199.component';

describe('MyComp9199Component', () => {
  let component: MyComp9199Component;
  let fixture: ComponentFixture<MyComp9199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
