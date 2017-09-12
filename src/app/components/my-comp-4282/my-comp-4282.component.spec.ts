import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4282Component } from './my-comp-4282.component';

describe('MyComp4282Component', () => {
  let component: MyComp4282Component;
  let fixture: ComponentFixture<MyComp4282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
