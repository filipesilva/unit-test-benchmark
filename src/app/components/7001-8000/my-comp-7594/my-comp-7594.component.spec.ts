import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7594Component } from './my-comp-7594.component';

describe('MyComp7594Component', () => {
  let component: MyComp7594Component;
  let fixture: ComponentFixture<MyComp7594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
