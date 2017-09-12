import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1624Component } from './my-comp-1624.component';

describe('MyComp1624Component', () => {
  let component: MyComp1624Component;
  let fixture: ComponentFixture<MyComp1624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
