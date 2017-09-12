import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7807Component } from './my-comp-7807.component';

describe('MyComp7807Component', () => {
  let component: MyComp7807Component;
  let fixture: ComponentFixture<MyComp7807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
