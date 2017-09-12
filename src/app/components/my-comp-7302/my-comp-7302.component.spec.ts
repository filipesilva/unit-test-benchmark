import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7302Component } from './my-comp-7302.component';

describe('MyComp7302Component', () => {
  let component: MyComp7302Component;
  let fixture: ComponentFixture<MyComp7302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
