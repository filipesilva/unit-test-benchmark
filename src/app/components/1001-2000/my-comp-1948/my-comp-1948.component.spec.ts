import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1948Component } from './my-comp-1948.component';

describe('MyComp1948Component', () => {
  let component: MyComp1948Component;
  let fixture: ComponentFixture<MyComp1948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
