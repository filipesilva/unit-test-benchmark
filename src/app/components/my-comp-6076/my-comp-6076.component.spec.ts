import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6076Component } from './my-comp-6076.component';

describe('MyComp6076Component', () => {
  let component: MyComp6076Component;
  let fixture: ComponentFixture<MyComp6076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
