import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1956Component } from './my-comp-1956.component';

describe('MyComp1956Component', () => {
  let component: MyComp1956Component;
  let fixture: ComponentFixture<MyComp1956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
