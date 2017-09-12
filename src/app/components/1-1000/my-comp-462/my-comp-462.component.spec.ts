import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp462Component } from './my-comp-462.component';

describe('MyComp462Component', () => {
  let component: MyComp462Component;
  let fixture: ComponentFixture<MyComp462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
