import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1412Component } from './my-comp-1412.component';

describe('MyComp1412Component', () => {
  let component: MyComp1412Component;
  let fixture: ComponentFixture<MyComp1412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
