import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1150Component } from './my-comp-1150.component';

describe('MyComp1150Component', () => {
  let component: MyComp1150Component;
  let fixture: ComponentFixture<MyComp1150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
