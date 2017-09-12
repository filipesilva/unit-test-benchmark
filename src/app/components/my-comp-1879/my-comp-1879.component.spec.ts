import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1879Component } from './my-comp-1879.component';

describe('MyComp1879Component', () => {
  let component: MyComp1879Component;
  let fixture: ComponentFixture<MyComp1879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
