import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1209Component } from './my-comp-1209.component';

describe('MyComp1209Component', () => {
  let component: MyComp1209Component;
  let fixture: ComponentFixture<MyComp1209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
