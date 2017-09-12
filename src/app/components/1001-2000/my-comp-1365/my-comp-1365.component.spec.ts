import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1365Component } from './my-comp-1365.component';

describe('MyComp1365Component', () => {
  let component: MyComp1365Component;
  let fixture: ComponentFixture<MyComp1365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
