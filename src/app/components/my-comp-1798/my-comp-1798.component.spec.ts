import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1798Component } from './my-comp-1798.component';

describe('MyComp1798Component', () => {
  let component: MyComp1798Component;
  let fixture: ComponentFixture<MyComp1798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
