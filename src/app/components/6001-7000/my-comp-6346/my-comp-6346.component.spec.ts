import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6346Component } from './my-comp-6346.component';

describe('MyComp6346Component', () => {
  let component: MyComp6346Component;
  let fixture: ComponentFixture<MyComp6346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
