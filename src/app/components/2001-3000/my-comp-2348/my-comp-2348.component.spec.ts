import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2348Component } from './my-comp-2348.component';

describe('MyComp2348Component', () => {
  let component: MyComp2348Component;
  let fixture: ComponentFixture<MyComp2348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
