import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1682Component } from './my-comp-1682.component';

describe('MyComp1682Component', () => {
  let component: MyComp1682Component;
  let fixture: ComponentFixture<MyComp1682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
