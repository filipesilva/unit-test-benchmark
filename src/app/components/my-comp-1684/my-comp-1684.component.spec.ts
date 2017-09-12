import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1684Component } from './my-comp-1684.component';

describe('MyComp1684Component', () => {
  let component: MyComp1684Component;
  let fixture: ComponentFixture<MyComp1684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
