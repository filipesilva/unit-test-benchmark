import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3883Component } from './my-comp-3883.component';

describe('MyComp3883Component', () => {
  let component: MyComp3883Component;
  let fixture: ComponentFixture<MyComp3883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
