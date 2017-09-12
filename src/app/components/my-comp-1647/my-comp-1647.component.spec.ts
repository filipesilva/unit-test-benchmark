import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1647Component } from './my-comp-1647.component';

describe('MyComp1647Component', () => {
  let component: MyComp1647Component;
  let fixture: ComponentFixture<MyComp1647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
