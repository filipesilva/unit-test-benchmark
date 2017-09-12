import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1354Component } from './my-comp-1354.component';

describe('MyComp1354Component', () => {
  let component: MyComp1354Component;
  let fixture: ComponentFixture<MyComp1354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
