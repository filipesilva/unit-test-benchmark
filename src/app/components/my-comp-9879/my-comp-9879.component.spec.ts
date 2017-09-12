import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9879Component } from './my-comp-9879.component';

describe('MyComp9879Component', () => {
  let component: MyComp9879Component;
  let fixture: ComponentFixture<MyComp9879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
