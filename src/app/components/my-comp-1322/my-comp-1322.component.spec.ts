import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1322Component } from './my-comp-1322.component';

describe('MyComp1322Component', () => {
  let component: MyComp1322Component;
  let fixture: ComponentFixture<MyComp1322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
