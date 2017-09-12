import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9208Component } from './my-comp-9208.component';

describe('MyComp9208Component', () => {
  let component: MyComp9208Component;
  let fixture: ComponentFixture<MyComp9208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
