import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp570Component } from './my-comp-570.component';

describe('MyComp570Component', () => {
  let component: MyComp570Component;
  let fixture: ComponentFixture<MyComp570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
