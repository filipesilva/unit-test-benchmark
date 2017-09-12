import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1678Component } from './my-comp-1678.component';

describe('MyComp1678Component', () => {
  let component: MyComp1678Component;
  let fixture: ComponentFixture<MyComp1678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
