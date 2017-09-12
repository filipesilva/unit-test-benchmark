import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7320Component } from './my-comp-7320.component';

describe('MyComp7320Component', () => {
  let component: MyComp7320Component;
  let fixture: ComponentFixture<MyComp7320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
