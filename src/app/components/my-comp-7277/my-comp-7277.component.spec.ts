import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7277Component } from './my-comp-7277.component';

describe('MyComp7277Component', () => {
  let component: MyComp7277Component;
  let fixture: ComponentFixture<MyComp7277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
