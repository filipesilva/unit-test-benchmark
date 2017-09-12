import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1784Component } from './my-comp-1784.component';

describe('MyComp1784Component', () => {
  let component: MyComp1784Component;
  let fixture: ComponentFixture<MyComp1784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
