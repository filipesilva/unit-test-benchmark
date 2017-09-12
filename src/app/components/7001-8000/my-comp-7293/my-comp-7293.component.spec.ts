import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7293Component } from './my-comp-7293.component';

describe('MyComp7293Component', () => {
  let component: MyComp7293Component;
  let fixture: ComponentFixture<MyComp7293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
