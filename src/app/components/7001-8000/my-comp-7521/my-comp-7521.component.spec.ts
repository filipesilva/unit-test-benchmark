import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7521Component } from './my-comp-7521.component';

describe('MyComp7521Component', () => {
  let component: MyComp7521Component;
  let fixture: ComponentFixture<MyComp7521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
