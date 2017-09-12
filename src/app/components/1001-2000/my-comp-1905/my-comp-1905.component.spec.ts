import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1905Component } from './my-comp-1905.component';

describe('MyComp1905Component', () => {
  let component: MyComp1905Component;
  let fixture: ComponentFixture<MyComp1905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
