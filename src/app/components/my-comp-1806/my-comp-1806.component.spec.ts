import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1806Component } from './my-comp-1806.component';

describe('MyComp1806Component', () => {
  let component: MyComp1806Component;
  let fixture: ComponentFixture<MyComp1806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
