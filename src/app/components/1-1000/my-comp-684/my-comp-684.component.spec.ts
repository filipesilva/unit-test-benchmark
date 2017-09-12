import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp684Component } from './my-comp-684.component';

describe('MyComp684Component', () => {
  let component: MyComp684Component;
  let fixture: ComponentFixture<MyComp684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
