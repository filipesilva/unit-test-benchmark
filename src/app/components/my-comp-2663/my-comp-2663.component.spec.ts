import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2663Component } from './my-comp-2663.component';

describe('MyComp2663Component', () => {
  let component: MyComp2663Component;
  let fixture: ComponentFixture<MyComp2663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
