import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1564Component } from './my-comp-1564.component';

describe('MyComp1564Component', () => {
  let component: MyComp1564Component;
  let fixture: ComponentFixture<MyComp1564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
