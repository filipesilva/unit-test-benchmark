import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1571Component } from './my-comp-1571.component';

describe('MyComp1571Component', () => {
  let component: MyComp1571Component;
  let fixture: ComponentFixture<MyComp1571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
