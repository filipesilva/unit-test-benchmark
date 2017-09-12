import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1060Component } from './my-comp-1060.component';

describe('MyComp1060Component', () => {
  let component: MyComp1060Component;
  let fixture: ComponentFixture<MyComp1060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
