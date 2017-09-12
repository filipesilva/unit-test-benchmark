import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2749Component } from './my-comp-2749.component';

describe('MyComp2749Component', () => {
  let component: MyComp2749Component;
  let fixture: ComponentFixture<MyComp2749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
