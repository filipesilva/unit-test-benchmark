import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1521Component } from './my-comp-1521.component';

describe('MyComp1521Component', () => {
  let component: MyComp1521Component;
  let fixture: ComponentFixture<MyComp1521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
