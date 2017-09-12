import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1640Component } from './my-comp-1640.component';

describe('MyComp1640Component', () => {
  let component: MyComp1640Component;
  let fixture: ComponentFixture<MyComp1640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
