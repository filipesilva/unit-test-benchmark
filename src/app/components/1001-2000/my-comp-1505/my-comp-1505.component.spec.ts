import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1505Component } from './my-comp-1505.component';

describe('MyComp1505Component', () => {
  let component: MyComp1505Component;
  let fixture: ComponentFixture<MyComp1505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
