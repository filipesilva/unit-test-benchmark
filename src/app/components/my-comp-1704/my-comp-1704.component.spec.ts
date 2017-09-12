import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1704Component } from './my-comp-1704.component';

describe('MyComp1704Component', () => {
  let component: MyComp1704Component;
  let fixture: ComponentFixture<MyComp1704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
