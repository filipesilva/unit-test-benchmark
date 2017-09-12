import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1529Component } from './my-comp-1529.component';

describe('MyComp1529Component', () => {
  let component: MyComp1529Component;
  let fixture: ComponentFixture<MyComp1529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
