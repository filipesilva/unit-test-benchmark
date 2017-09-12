import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1224Component } from './my-comp-1224.component';

describe('MyComp1224Component', () => {
  let component: MyComp1224Component;
  let fixture: ComponentFixture<MyComp1224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
