import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6213Component } from './my-comp-6213.component';

describe('MyComp6213Component', () => {
  let component: MyComp6213Component;
  let fixture: ComponentFixture<MyComp6213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
