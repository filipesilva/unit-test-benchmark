import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4479Component } from './my-comp-4479.component';

describe('MyComp4479Component', () => {
  let component: MyComp4479Component;
  let fixture: ComponentFixture<MyComp4479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
