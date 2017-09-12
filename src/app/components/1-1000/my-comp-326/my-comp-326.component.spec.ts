import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp326Component } from './my-comp-326.component';

describe('MyComp326Component', () => {
  let component: MyComp326Component;
  let fixture: ComponentFixture<MyComp326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
