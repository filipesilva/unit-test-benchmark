import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9790Component } from './my-comp-9790.component';

describe('MyComp9790Component', () => {
  let component: MyComp9790Component;
  let fixture: ComponentFixture<MyComp9790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
