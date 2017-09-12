import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1546Component } from './my-comp-1546.component';

describe('MyComp1546Component', () => {
  let component: MyComp1546Component;
  let fixture: ComponentFixture<MyComp1546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
