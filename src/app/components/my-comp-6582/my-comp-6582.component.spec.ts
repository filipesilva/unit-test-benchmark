import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6582Component } from './my-comp-6582.component';

describe('MyComp6582Component', () => {
  let component: MyComp6582Component;
  let fixture: ComponentFixture<MyComp6582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
