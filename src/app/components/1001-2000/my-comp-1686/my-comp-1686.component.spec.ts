import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1686Component } from './my-comp-1686.component';

describe('MyComp1686Component', () => {
  let component: MyComp1686Component;
  let fixture: ComponentFixture<MyComp1686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
