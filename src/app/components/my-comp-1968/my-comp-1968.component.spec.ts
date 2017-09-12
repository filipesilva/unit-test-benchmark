import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1968Component } from './my-comp-1968.component';

describe('MyComp1968Component', () => {
  let component: MyComp1968Component;
  let fixture: ComponentFixture<MyComp1968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
