import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1946Component } from './my-comp-1946.component';

describe('MyComp1946Component', () => {
  let component: MyComp1946Component;
  let fixture: ComponentFixture<MyComp1946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
