import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1651Component } from './my-comp-1651.component';

describe('MyComp1651Component', () => {
  let component: MyComp1651Component;
  let fixture: ComponentFixture<MyComp1651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
