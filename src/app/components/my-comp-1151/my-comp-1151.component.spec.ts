import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1151Component } from './my-comp-1151.component';

describe('MyComp1151Component', () => {
  let component: MyComp1151Component;
  let fixture: ComponentFixture<MyComp1151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
