import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1871Component } from './my-comp-1871.component';

describe('MyComp1871Component', () => {
  let component: MyComp1871Component;
  let fixture: ComponentFixture<MyComp1871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
