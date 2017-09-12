import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7178Component } from './my-comp-7178.component';

describe('MyComp7178Component', () => {
  let component: MyComp7178Component;
  let fixture: ComponentFixture<MyComp7178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
