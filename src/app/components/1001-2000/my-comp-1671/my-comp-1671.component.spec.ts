import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1671Component } from './my-comp-1671.component';

describe('MyComp1671Component', () => {
  let component: MyComp1671Component;
  let fixture: ComponentFixture<MyComp1671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
