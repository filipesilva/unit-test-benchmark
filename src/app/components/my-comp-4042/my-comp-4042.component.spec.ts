import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4042Component } from './my-comp-4042.component';

describe('MyComp4042Component', () => {
  let component: MyComp4042Component;
  let fixture: ComponentFixture<MyComp4042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
