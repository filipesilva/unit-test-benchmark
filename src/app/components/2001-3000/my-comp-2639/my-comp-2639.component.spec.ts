import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2639Component } from './my-comp-2639.component';

describe('MyComp2639Component', () => {
  let component: MyComp2639Component;
  let fixture: ComponentFixture<MyComp2639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
