import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1795Component } from './my-comp-1795.component';

describe('MyComp1795Component', () => {
  let component: MyComp1795Component;
  let fixture: ComponentFixture<MyComp1795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
