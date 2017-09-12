import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1618Component } from './my-comp-1618.component';

describe('MyComp1618Component', () => {
  let component: MyComp1618Component;
  let fixture: ComponentFixture<MyComp1618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
