import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7564Component } from './my-comp-7564.component';

describe('MyComp7564Component', () => {
  let component: MyComp7564Component;
  let fixture: ComponentFixture<MyComp7564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
