import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2605Component } from './my-comp-2605.component';

describe('MyComp2605Component', () => {
  let component: MyComp2605Component;
  let fixture: ComponentFixture<MyComp2605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
