import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5456Component } from './my-comp-5456.component';

describe('MyComp5456Component', () => {
  let component: MyComp5456Component;
  let fixture: ComponentFixture<MyComp5456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
