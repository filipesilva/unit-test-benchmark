import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1270Component } from './my-comp-1270.component';

describe('MyComp1270Component', () => {
  let component: MyComp1270Component;
  let fixture: ComponentFixture<MyComp1270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
