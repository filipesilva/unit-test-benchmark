import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6178Component } from './my-comp-6178.component';

describe('MyComp6178Component', () => {
  let component: MyComp6178Component;
  let fixture: ComponentFixture<MyComp6178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
