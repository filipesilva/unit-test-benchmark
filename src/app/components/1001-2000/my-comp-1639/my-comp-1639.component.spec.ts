import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1639Component } from './my-comp-1639.component';

describe('MyComp1639Component', () => {
  let component: MyComp1639Component;
  let fixture: ComponentFixture<MyComp1639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
