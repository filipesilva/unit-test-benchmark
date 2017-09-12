import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7065Component } from './my-comp-7065.component';

describe('MyComp7065Component', () => {
  let component: MyComp7065Component;
  let fixture: ComponentFixture<MyComp7065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
