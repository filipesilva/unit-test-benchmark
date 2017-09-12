import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp120Component } from './my-comp-120.component';

describe('MyComp120Component', () => {
  let component: MyComp120Component;
  let fixture: ComponentFixture<MyComp120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
