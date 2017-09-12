import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9684Component } from './my-comp-9684.component';

describe('MyComp9684Component', () => {
  let component: MyComp9684Component;
  let fixture: ComponentFixture<MyComp9684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
