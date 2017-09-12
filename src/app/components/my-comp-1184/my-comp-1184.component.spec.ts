import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1184Component } from './my-comp-1184.component';

describe('MyComp1184Component', () => {
  let component: MyComp1184Component;
  let fixture: ComponentFixture<MyComp1184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
