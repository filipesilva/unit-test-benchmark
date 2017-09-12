import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9100Component } from './my-comp-9100.component';

describe('MyComp9100Component', () => {
  let component: MyComp9100Component;
  let fixture: ComponentFixture<MyComp9100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
