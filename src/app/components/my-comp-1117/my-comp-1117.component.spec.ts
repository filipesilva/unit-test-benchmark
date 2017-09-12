import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1117Component } from './my-comp-1117.component';

describe('MyComp1117Component', () => {
  let component: MyComp1117Component;
  let fixture: ComponentFixture<MyComp1117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
