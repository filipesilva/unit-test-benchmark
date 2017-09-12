import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2624Component } from './my-comp-2624.component';

describe('MyComp2624Component', () => {
  let component: MyComp2624Component;
  let fixture: ComponentFixture<MyComp2624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
