import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7694Component } from './my-comp-7694.component';

describe('MyComp7694Component', () => {
  let component: MyComp7694Component;
  let fixture: ComponentFixture<MyComp7694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
