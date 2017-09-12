import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1733Component } from './my-comp-1733.component';

describe('MyComp1733Component', () => {
  let component: MyComp1733Component;
  let fixture: ComponentFixture<MyComp1733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
