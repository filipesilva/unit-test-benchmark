import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1769Component } from './my-comp-1769.component';

describe('MyComp1769Component', () => {
  let component: MyComp1769Component;
  let fixture: ComponentFixture<MyComp1769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
