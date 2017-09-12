import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1976Component } from './my-comp-1976.component';

describe('MyComp1976Component', () => {
  let component: MyComp1976Component;
  let fixture: ComponentFixture<MyComp1976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
