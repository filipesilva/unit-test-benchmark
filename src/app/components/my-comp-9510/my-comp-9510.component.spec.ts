import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9510Component } from './my-comp-9510.component';

describe('MyComp9510Component', () => {
  let component: MyComp9510Component;
  let fixture: ComponentFixture<MyComp9510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
