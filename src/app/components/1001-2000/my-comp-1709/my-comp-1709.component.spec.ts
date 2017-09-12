import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1709Component } from './my-comp-1709.component';

describe('MyComp1709Component', () => {
  let component: MyComp1709Component;
  let fixture: ComponentFixture<MyComp1709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
