import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1042Component } from './my-comp-1042.component';

describe('MyComp1042Component', () => {
  let component: MyComp1042Component;
  let fixture: ComponentFixture<MyComp1042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
