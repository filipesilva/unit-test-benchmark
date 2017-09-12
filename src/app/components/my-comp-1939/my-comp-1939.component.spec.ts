import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1939Component } from './my-comp-1939.component';

describe('MyComp1939Component', () => {
  let component: MyComp1939Component;
  let fixture: ComponentFixture<MyComp1939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
