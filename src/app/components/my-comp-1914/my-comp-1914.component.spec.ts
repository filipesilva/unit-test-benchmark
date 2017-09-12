import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1914Component } from './my-comp-1914.component';

describe('MyComp1914Component', () => {
  let component: MyComp1914Component;
  let fixture: ComponentFixture<MyComp1914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
