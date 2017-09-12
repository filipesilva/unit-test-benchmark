import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7697Component } from './my-comp-7697.component';

describe('MyComp7697Component', () => {
  let component: MyComp7697Component;
  let fixture: ComponentFixture<MyComp7697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
