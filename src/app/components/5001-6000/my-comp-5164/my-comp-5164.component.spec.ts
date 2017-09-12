import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5164Component } from './my-comp-5164.component';

describe('MyComp5164Component', () => {
  let component: MyComp5164Component;
  let fixture: ComponentFixture<MyComp5164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
