import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6852Component } from './my-comp-6852.component';

describe('MyComp6852Component', () => {
  let component: MyComp6852Component;
  let fixture: ComponentFixture<MyComp6852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
