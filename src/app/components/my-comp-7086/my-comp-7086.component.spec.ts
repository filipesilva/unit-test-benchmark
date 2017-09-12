import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7086Component } from './my-comp-7086.component';

describe('MyComp7086Component', () => {
  let component: MyComp7086Component;
  let fixture: ComponentFixture<MyComp7086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
