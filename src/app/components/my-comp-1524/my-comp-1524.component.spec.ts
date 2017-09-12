import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1524Component } from './my-comp-1524.component';

describe('MyComp1524Component', () => {
  let component: MyComp1524Component;
  let fixture: ComponentFixture<MyComp1524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
