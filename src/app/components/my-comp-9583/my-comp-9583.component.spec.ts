import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9583Component } from './my-comp-9583.component';

describe('MyComp9583Component', () => {
  let component: MyComp9583Component;
  let fixture: ComponentFixture<MyComp9583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
