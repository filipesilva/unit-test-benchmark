import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1807Component } from './my-comp-1807.component';

describe('MyComp1807Component', () => {
  let component: MyComp1807Component;
  let fixture: ComponentFixture<MyComp1807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
