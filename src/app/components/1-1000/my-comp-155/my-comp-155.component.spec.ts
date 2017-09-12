import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp155Component } from './my-comp-155.component';

describe('MyComp155Component', () => {
  let component: MyComp155Component;
  let fixture: ComponentFixture<MyComp155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
