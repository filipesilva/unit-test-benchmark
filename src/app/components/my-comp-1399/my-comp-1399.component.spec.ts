import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1399Component } from './my-comp-1399.component';

describe('MyComp1399Component', () => {
  let component: MyComp1399Component;
  let fixture: ComponentFixture<MyComp1399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
