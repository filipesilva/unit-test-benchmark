import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1962Component } from './my-comp-1962.component';

describe('MyComp1962Component', () => {
  let component: MyComp1962Component;
  let fixture: ComponentFixture<MyComp1962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
