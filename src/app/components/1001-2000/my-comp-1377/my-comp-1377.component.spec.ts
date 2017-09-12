import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1377Component } from './my-comp-1377.component';

describe('MyComp1377Component', () => {
  let component: MyComp1377Component;
  let fixture: ComponentFixture<MyComp1377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
