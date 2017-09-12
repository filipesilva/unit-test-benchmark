import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7445Component } from './my-comp-7445.component';

describe('MyComp7445Component', () => {
  let component: MyComp7445Component;
  let fixture: ComponentFixture<MyComp7445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
