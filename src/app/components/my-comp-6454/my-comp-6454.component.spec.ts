import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6454Component } from './my-comp-6454.component';

describe('MyComp6454Component', () => {
  let component: MyComp6454Component;
  let fixture: ComponentFixture<MyComp6454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
