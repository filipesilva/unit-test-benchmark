import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp114Component } from './my-comp-114.component';

describe('MyComp114Component', () => {
  let component: MyComp114Component;
  let fixture: ComponentFixture<MyComp114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
