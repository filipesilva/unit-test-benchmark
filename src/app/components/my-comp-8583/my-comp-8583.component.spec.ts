import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8583Component } from './my-comp-8583.component';

describe('MyComp8583Component', () => {
  let component: MyComp8583Component;
  let fixture: ComponentFixture<MyComp8583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
