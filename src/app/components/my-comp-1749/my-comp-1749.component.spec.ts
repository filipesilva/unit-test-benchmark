import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1749Component } from './my-comp-1749.component';

describe('MyComp1749Component', () => {
  let component: MyComp1749Component;
  let fixture: ComponentFixture<MyComp1749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
