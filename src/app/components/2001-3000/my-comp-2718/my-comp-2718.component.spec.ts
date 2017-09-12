import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2718Component } from './my-comp-2718.component';

describe('MyComp2718Component', () => {
  let component: MyComp2718Component;
  let fixture: ComponentFixture<MyComp2718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
