import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1292Component } from './my-comp-1292.component';

describe('MyComp1292Component', () => {
  let component: MyComp1292Component;
  let fixture: ComponentFixture<MyComp1292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
