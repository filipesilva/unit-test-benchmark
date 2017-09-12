import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1598Component } from './my-comp-1598.component';

describe('MyComp1598Component', () => {
  let component: MyComp1598Component;
  let fixture: ComponentFixture<MyComp1598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
