import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1130Component } from './my-comp-1130.component';

describe('MyComp1130Component', () => {
  let component: MyComp1130Component;
  let fixture: ComponentFixture<MyComp1130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
