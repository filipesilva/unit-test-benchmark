import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9042Component } from './my-comp-9042.component';

describe('MyComp9042Component', () => {
  let component: MyComp9042Component;
  let fixture: ComponentFixture<MyComp9042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
