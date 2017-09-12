import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp941Component } from './my-comp-941.component';

describe('MyComp941Component', () => {
  let component: MyComp941Component;
  let fixture: ComponentFixture<MyComp941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
