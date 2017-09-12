import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6184Component } from './my-comp-6184.component';

describe('MyComp6184Component', () => {
  let component: MyComp6184Component;
  let fixture: ComponentFixture<MyComp6184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
