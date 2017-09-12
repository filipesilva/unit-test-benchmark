import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2774Component } from './my-comp-2774.component';

describe('MyComp2774Component', () => {
  let component: MyComp2774Component;
  let fixture: ComponentFixture<MyComp2774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
