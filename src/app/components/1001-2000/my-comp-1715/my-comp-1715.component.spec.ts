import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1715Component } from './my-comp-1715.component';

describe('MyComp1715Component', () => {
  let component: MyComp1715Component;
  let fixture: ComponentFixture<MyComp1715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
