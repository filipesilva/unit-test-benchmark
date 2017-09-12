import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2227Component } from './my-comp-2227.component';

describe('MyComp2227Component', () => {
  let component: MyComp2227Component;
  let fixture: ComponentFixture<MyComp2227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
