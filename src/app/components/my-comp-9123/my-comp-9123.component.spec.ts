import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9123Component } from './my-comp-9123.component';

describe('MyComp9123Component', () => {
  let component: MyComp9123Component;
  let fixture: ComponentFixture<MyComp9123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
