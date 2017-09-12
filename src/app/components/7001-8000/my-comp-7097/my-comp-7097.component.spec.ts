import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7097Component } from './my-comp-7097.component';

describe('MyComp7097Component', () => {
  let component: MyComp7097Component;
  let fixture: ComponentFixture<MyComp7097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
