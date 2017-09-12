import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7123Component } from './my-comp-7123.component';

describe('MyComp7123Component', () => {
  let component: MyComp7123Component;
  let fixture: ComponentFixture<MyComp7123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
