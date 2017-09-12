import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1465Component } from './my-comp-1465.component';

describe('MyComp1465Component', () => {
  let component: MyComp1465Component;
  let fixture: ComponentFixture<MyComp1465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
