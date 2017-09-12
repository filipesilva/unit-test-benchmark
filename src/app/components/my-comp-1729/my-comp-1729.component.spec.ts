import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1729Component } from './my-comp-1729.component';

describe('MyComp1729Component', () => {
  let component: MyComp1729Component;
  let fixture: ComponentFixture<MyComp1729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
