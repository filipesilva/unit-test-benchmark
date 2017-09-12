import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2027Component } from './my-comp-2027.component';

describe('MyComp2027Component', () => {
  let component: MyComp2027Component;
  let fixture: ComponentFixture<MyComp2027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
