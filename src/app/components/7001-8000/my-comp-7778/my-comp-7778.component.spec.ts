import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7778Component } from './my-comp-7778.component';

describe('MyComp7778Component', () => {
  let component: MyComp7778Component;
  let fixture: ComponentFixture<MyComp7778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
