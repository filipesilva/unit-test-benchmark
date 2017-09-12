import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1714Component } from './my-comp-1714.component';

describe('MyComp1714Component', () => {
  let component: MyComp1714Component;
  let fixture: ComponentFixture<MyComp1714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
