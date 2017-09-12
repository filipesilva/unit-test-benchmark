import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2534Component } from './my-comp-2534.component';

describe('MyComp2534Component', () => {
  let component: MyComp2534Component;
  let fixture: ComponentFixture<MyComp2534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
