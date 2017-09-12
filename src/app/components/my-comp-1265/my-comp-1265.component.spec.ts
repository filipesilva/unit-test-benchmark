import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1265Component } from './my-comp-1265.component';

describe('MyComp1265Component', () => {
  let component: MyComp1265Component;
  let fixture: ComponentFixture<MyComp1265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
