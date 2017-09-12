import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7356Component } from './my-comp-7356.component';

describe('MyComp7356Component', () => {
  let component: MyComp7356Component;
  let fixture: ComponentFixture<MyComp7356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
