import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2658Component } from './my-comp-2658.component';

describe('MyComp2658Component', () => {
  let component: MyComp2658Component;
  let fixture: ComponentFixture<MyComp2658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
