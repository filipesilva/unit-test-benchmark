import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1091Component } from './my-comp-1091.component';

describe('MyComp1091Component', () => {
  let component: MyComp1091Component;
  let fixture: ComponentFixture<MyComp1091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
