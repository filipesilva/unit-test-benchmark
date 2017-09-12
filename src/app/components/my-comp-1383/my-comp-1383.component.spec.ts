import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1383Component } from './my-comp-1383.component';

describe('MyComp1383Component', () => {
  let component: MyComp1383Component;
  let fixture: ComponentFixture<MyComp1383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
