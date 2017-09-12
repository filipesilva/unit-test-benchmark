import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1054Component } from './my-comp-1054.component';

describe('MyComp1054Component', () => {
  let component: MyComp1054Component;
  let fixture: ComponentFixture<MyComp1054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
