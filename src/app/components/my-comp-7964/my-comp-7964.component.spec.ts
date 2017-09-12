import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7964Component } from './my-comp-7964.component';

describe('MyComp7964Component', () => {
  let component: MyComp7964Component;
  let fixture: ComponentFixture<MyComp7964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
