import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1012Component } from './my-comp-1012.component';

describe('MyComp1012Component', () => {
  let component: MyComp1012Component;
  let fixture: ComponentFixture<MyComp1012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
