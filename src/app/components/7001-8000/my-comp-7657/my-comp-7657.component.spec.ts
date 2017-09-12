import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7657Component } from './my-comp-7657.component';

describe('MyComp7657Component', () => {
  let component: MyComp7657Component;
  let fixture: ComponentFixture<MyComp7657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
