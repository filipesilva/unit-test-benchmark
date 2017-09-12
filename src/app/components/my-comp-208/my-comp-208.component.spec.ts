import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp208Component } from './my-comp-208.component';

describe('MyComp208Component', () => {
  let component: MyComp208Component;
  let fixture: ComponentFixture<MyComp208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
