import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1191Component } from './my-comp-1191.component';

describe('MyComp1191Component', () => {
  let component: MyComp1191Component;
  let fixture: ComponentFixture<MyComp1191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
