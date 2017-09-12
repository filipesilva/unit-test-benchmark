import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1876Component } from './my-comp-1876.component';

describe('MyComp1876Component', () => {
  let component: MyComp1876Component;
  let fixture: ComponentFixture<MyComp1876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
