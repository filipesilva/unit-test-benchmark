import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1766Component } from './my-comp-1766.component';

describe('MyComp1766Component', () => {
  let component: MyComp1766Component;
  let fixture: ComponentFixture<MyComp1766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
