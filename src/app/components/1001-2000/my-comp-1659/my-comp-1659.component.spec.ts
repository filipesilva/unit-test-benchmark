import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1659Component } from './my-comp-1659.component';

describe('MyComp1659Component', () => {
  let component: MyComp1659Component;
  let fixture: ComponentFixture<MyComp1659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
