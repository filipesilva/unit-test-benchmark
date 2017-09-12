import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7684Component } from './my-comp-7684.component';

describe('MyComp7684Component', () => {
  let component: MyComp7684Component;
  let fixture: ComponentFixture<MyComp7684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
