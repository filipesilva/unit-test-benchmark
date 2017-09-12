import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1258Component } from './my-comp-1258.component';

describe('MyComp1258Component', () => {
  let component: MyComp1258Component;
  let fixture: ComponentFixture<MyComp1258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
