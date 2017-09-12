import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7253Component } from './my-comp-7253.component';

describe('MyComp7253Component', () => {
  let component: MyComp7253Component;
  let fixture: ComponentFixture<MyComp7253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
