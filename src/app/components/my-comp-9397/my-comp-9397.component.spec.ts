import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9397Component } from './my-comp-9397.component';

describe('MyComp9397Component', () => {
  let component: MyComp9397Component;
  let fixture: ComponentFixture<MyComp9397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
