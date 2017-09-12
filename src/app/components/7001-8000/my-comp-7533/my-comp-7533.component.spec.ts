import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7533Component } from './my-comp-7533.component';

describe('MyComp7533Component', () => {
  let component: MyComp7533Component;
  let fixture: ComponentFixture<MyComp7533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
