import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1657Component } from './my-comp-1657.component';

describe('MyComp1657Component', () => {
  let component: MyComp1657Component;
  let fixture: ComponentFixture<MyComp1657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
