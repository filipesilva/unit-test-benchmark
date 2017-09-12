import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1247Component } from './my-comp-1247.component';

describe('MyComp1247Component', () => {
  let component: MyComp1247Component;
  let fixture: ComponentFixture<MyComp1247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
