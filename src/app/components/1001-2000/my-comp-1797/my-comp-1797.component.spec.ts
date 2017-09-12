import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1797Component } from './my-comp-1797.component';

describe('MyComp1797Component', () => {
  let component: MyComp1797Component;
  let fixture: ComponentFixture<MyComp1797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
