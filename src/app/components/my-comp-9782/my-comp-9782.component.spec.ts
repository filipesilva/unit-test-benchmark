import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9782Component } from './my-comp-9782.component';

describe('MyComp9782Component', () => {
  let component: MyComp9782Component;
  let fixture: ComponentFixture<MyComp9782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
