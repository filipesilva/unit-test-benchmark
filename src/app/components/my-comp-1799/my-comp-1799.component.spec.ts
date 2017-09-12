import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1799Component } from './my-comp-1799.component';

describe('MyComp1799Component', () => {
  let component: MyComp1799Component;
  let fixture: ComponentFixture<MyComp1799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
