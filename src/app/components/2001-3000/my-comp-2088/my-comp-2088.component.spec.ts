import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2088Component } from './my-comp-2088.component';

describe('MyComp2088Component', () => {
  let component: MyComp2088Component;
  let fixture: ComponentFixture<MyComp2088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
