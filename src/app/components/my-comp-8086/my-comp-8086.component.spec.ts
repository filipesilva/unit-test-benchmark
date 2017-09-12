import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8086Component } from './my-comp-8086.component';

describe('MyComp8086Component', () => {
  let component: MyComp8086Component;
  let fixture: ComponentFixture<MyComp8086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
