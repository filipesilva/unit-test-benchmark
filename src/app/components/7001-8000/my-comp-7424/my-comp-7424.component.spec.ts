import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7424Component } from './my-comp-7424.component';

describe('MyComp7424Component', () => {
  let component: MyComp7424Component;
  let fixture: ComponentFixture<MyComp7424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
