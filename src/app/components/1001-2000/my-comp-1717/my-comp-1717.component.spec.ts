import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1717Component } from './my-comp-1717.component';

describe('MyComp1717Component', () => {
  let component: MyComp1717Component;
  let fixture: ComponentFixture<MyComp1717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
