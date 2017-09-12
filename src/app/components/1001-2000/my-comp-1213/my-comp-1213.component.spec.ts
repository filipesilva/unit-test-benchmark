import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1213Component } from './my-comp-1213.component';

describe('MyComp1213Component', () => {
  let component: MyComp1213Component;
  let fixture: ComponentFixture<MyComp1213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
