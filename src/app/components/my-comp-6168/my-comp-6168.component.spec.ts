import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6168Component } from './my-comp-6168.component';

describe('MyComp6168Component', () => {
  let component: MyComp6168Component;
  let fixture: ComponentFixture<MyComp6168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
