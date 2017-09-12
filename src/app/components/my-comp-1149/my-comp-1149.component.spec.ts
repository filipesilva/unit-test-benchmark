import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1149Component } from './my-comp-1149.component';

describe('MyComp1149Component', () => {
  let component: MyComp1149Component;
  let fixture: ComponentFixture<MyComp1149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
