import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1626Component } from './my-comp-1626.component';

describe('MyComp1626Component', () => {
  let component: MyComp1626Component;
  let fixture: ComponentFixture<MyComp1626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
