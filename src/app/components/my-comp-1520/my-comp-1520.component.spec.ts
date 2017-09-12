import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1520Component } from './my-comp-1520.component';

describe('MyComp1520Component', () => {
  let component: MyComp1520Component;
  let fixture: ComponentFixture<MyComp1520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
