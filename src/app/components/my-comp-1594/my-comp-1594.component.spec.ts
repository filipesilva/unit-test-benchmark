import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1594Component } from './my-comp-1594.component';

describe('MyComp1594Component', () => {
  let component: MyComp1594Component;
  let fixture: ComponentFixture<MyComp1594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
