import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8070Component } from './my-comp-8070.component';

describe('MyComp8070Component', () => {
  let component: MyComp8070Component;
  let fixture: ComponentFixture<MyComp8070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
