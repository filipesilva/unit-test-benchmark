import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1219Component } from './my-comp-1219.component';

describe('MyComp1219Component', () => {
  let component: MyComp1219Component;
  let fixture: ComponentFixture<MyComp1219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
