import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7287Component } from './my-comp-7287.component';

describe('MyComp7287Component', () => {
  let component: MyComp7287Component;
  let fixture: ComponentFixture<MyComp7287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
