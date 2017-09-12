import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7400Component } from './my-comp-7400.component';

describe('MyComp7400Component', () => {
  let component: MyComp7400Component;
  let fixture: ComponentFixture<MyComp7400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
