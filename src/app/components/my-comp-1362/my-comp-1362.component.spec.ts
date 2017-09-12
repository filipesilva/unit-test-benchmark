import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1362Component } from './my-comp-1362.component';

describe('MyComp1362Component', () => {
  let component: MyComp1362Component;
  let fixture: ComponentFixture<MyComp1362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
