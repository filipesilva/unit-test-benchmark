import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1754Component } from './my-comp-1754.component';

describe('MyComp1754Component', () => {
  let component: MyComp1754Component;
  let fixture: ComponentFixture<MyComp1754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
