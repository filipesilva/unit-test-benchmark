import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1081Component } from './my-comp-1081.component';

describe('MyComp1081Component', () => {
  let component: MyComp1081Component;
  let fixture: ComponentFixture<MyComp1081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
