import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1988Component } from './my-comp-1988.component';

describe('MyComp1988Component', () => {
  let component: MyComp1988Component;
  let fixture: ComponentFixture<MyComp1988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
