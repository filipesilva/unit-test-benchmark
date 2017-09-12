import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1697Component } from './my-comp-1697.component';

describe('MyComp1697Component', () => {
  let component: MyComp1697Component;
  let fixture: ComponentFixture<MyComp1697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
