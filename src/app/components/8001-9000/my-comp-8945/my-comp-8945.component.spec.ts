import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8945Component } from './my-comp-8945.component';

describe('MyComp8945Component', () => {
  let component: MyComp8945Component;
  let fixture: ComponentFixture<MyComp8945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
