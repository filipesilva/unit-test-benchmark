import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1752Component } from './my-comp-1752.component';

describe('MyComp1752Component', () => {
  let component: MyComp1752Component;
  let fixture: ComponentFixture<MyComp1752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
