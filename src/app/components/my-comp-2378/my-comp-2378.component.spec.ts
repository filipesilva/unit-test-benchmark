import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2378Component } from './my-comp-2378.component';

describe('MyComp2378Component', () => {
  let component: MyComp2378Component;
  let fixture: ComponentFixture<MyComp2378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
