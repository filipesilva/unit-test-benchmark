import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9027Component } from './my-comp-9027.component';

describe('MyComp9027Component', () => {
  let component: MyComp9027Component;
  let fixture: ComponentFixture<MyComp9027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
