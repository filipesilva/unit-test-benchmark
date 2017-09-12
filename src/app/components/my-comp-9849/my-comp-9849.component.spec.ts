import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9849Component } from './my-comp-9849.component';

describe('MyComp9849Component', () => {
  let component: MyComp9849Component;
  let fixture: ComponentFixture<MyComp9849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
