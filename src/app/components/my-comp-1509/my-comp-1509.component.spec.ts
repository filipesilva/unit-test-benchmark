import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1509Component } from './my-comp-1509.component';

describe('MyComp1509Component', () => {
  let component: MyComp1509Component;
  let fixture: ComponentFixture<MyComp1509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
