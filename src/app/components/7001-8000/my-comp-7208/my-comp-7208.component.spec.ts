import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7208Component } from './my-comp-7208.component';

describe('MyComp7208Component', () => {
  let component: MyComp7208Component;
  let fixture: ComponentFixture<MyComp7208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
