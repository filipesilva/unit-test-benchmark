import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7598Component } from './my-comp-7598.component';

describe('MyComp7598Component', () => {
  let component: MyComp7598Component;
  let fixture: ComponentFixture<MyComp7598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
