import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2594Component } from './my-comp-2594.component';

describe('MyComp2594Component', () => {
  let component: MyComp2594Component;
  let fixture: ComponentFixture<MyComp2594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
