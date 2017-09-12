import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1139Component } from './my-comp-1139.component';

describe('MyComp1139Component', () => {
  let component: MyComp1139Component;
  let fixture: ComponentFixture<MyComp1139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
