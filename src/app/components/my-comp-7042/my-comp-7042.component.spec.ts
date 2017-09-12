import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7042Component } from './my-comp-7042.component';

describe('MyComp7042Component', () => {
  let component: MyComp7042Component;
  let fixture: ComponentFixture<MyComp7042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
