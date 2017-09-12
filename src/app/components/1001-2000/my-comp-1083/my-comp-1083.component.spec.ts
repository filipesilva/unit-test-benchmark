import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1083Component } from './my-comp-1083.component';

describe('MyComp1083Component', () => {
  let component: MyComp1083Component;
  let fixture: ComponentFixture<MyComp1083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
