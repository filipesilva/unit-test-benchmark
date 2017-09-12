import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2675Component } from './my-comp-2675.component';

describe('MyComp2675Component', () => {
  let component: MyComp2675Component;
  let fixture: ComponentFixture<MyComp2675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
