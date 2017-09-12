import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2042Component } from './my-comp-2042.component';

describe('MyComp2042Component', () => {
  let component: MyComp2042Component;
  let fixture: ComponentFixture<MyComp2042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
