import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1284Component } from './my-comp-1284.component';

describe('MyComp1284Component', () => {
  let component: MyComp1284Component;
  let fixture: ComponentFixture<MyComp1284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
