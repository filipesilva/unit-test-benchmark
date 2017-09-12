import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1658Component } from './my-comp-1658.component';

describe('MyComp1658Component', () => {
  let component: MyComp1658Component;
  let fixture: ComponentFixture<MyComp1658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
