import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1833Component } from './my-comp-1833.component';

describe('MyComp1833Component', () => {
  let component: MyComp1833Component;
  let fixture: ComponentFixture<MyComp1833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
