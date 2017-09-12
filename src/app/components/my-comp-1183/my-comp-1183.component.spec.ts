import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1183Component } from './my-comp-1183.component';

describe('MyComp1183Component', () => {
  let component: MyComp1183Component;
  let fixture: ComponentFixture<MyComp1183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
