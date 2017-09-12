import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7674Component } from './my-comp-7674.component';

describe('MyComp7674Component', () => {
  let component: MyComp7674Component;
  let fixture: ComponentFixture<MyComp7674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
