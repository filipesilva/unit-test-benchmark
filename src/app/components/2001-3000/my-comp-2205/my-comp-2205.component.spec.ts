import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2205Component } from './my-comp-2205.component';

describe('MyComp2205Component', () => {
  let component: MyComp2205Component;
  let fixture: ComponentFixture<MyComp2205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
