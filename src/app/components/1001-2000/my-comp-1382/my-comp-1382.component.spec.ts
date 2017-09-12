import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1382Component } from './my-comp-1382.component';

describe('MyComp1382Component', () => {
  let component: MyComp1382Component;
  let fixture: ComponentFixture<MyComp1382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
