import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1675Component } from './my-comp-1675.component';

describe('MyComp1675Component', () => {
  let component: MyComp1675Component;
  let fixture: ComponentFixture<MyComp1675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
