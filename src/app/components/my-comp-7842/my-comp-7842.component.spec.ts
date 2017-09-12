import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7842Component } from './my-comp-7842.component';

describe('MyComp7842Component', () => {
  let component: MyComp7842Component;
  let fixture: ComponentFixture<MyComp7842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
