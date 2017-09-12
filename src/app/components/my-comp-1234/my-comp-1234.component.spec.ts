import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1234Component } from './my-comp-1234.component';

describe('MyComp1234Component', () => {
  let component: MyComp1234Component;
  let fixture: ComponentFixture<MyComp1234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
