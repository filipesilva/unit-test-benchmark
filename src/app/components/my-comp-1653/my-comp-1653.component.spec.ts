import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1653Component } from './my-comp-1653.component';

describe('MyComp1653Component', () => {
  let component: MyComp1653Component;
  let fixture: ComponentFixture<MyComp1653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
