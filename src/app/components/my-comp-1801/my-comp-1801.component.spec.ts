import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1801Component } from './my-comp-1801.component';

describe('MyComp1801Component', () => {
  let component: MyComp1801Component;
  let fixture: ComponentFixture<MyComp1801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
