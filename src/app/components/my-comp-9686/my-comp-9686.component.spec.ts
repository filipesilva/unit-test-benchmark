import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9686Component } from './my-comp-9686.component';

describe('MyComp9686Component', () => {
  let component: MyComp9686Component;
  let fixture: ComponentFixture<MyComp9686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
