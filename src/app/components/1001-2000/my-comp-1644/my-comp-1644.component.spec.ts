import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1644Component } from './my-comp-1644.component';

describe('MyComp1644Component', () => {
  let component: MyComp1644Component;
  let fixture: ComponentFixture<MyComp1644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
