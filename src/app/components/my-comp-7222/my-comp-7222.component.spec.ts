import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7222Component } from './my-comp-7222.component';

describe('MyComp7222Component', () => {
  let component: MyComp7222Component;
  let fixture: ComponentFixture<MyComp7222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
