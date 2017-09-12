import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1900Component } from './my-comp-1900.component';

describe('MyComp1900Component', () => {
  let component: MyComp1900Component;
  let fixture: ComponentFixture<MyComp1900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
