import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7718Component } from './my-comp-7718.component';

describe('MyComp7718Component', () => {
  let component: MyComp7718Component;
  let fixture: ComponentFixture<MyComp7718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
