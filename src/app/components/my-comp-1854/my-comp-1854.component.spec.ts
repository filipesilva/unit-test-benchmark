import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1854Component } from './my-comp-1854.component';

describe('MyComp1854Component', () => {
  let component: MyComp1854Component;
  let fixture: ComponentFixture<MyComp1854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
