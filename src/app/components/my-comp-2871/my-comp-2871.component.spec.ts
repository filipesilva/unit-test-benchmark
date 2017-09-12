import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2871Component } from './my-comp-2871.component';

describe('MyComp2871Component', () => {
  let component: MyComp2871Component;
  let fixture: ComponentFixture<MyComp2871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
