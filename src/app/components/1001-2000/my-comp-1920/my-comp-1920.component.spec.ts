import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1920Component } from './my-comp-1920.component';

describe('MyComp1920Component', () => {
  let component: MyComp1920Component;
  let fixture: ComponentFixture<MyComp1920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
