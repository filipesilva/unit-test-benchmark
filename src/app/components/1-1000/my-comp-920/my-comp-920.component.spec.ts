import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp920Component } from './my-comp-920.component';

describe('MyComp920Component', () => {
  let component: MyComp920Component;
  let fixture: ComponentFixture<MyComp920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
