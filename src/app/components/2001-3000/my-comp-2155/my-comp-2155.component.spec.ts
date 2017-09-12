import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2155Component } from './my-comp-2155.component';

describe('MyComp2155Component', () => {
  let component: MyComp2155Component;
  let fixture: ComponentFixture<MyComp2155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
