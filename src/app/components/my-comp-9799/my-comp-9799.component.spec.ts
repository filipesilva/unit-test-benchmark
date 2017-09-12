import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9799Component } from './my-comp-9799.component';

describe('MyComp9799Component', () => {
  let component: MyComp9799Component;
  let fixture: ComponentFixture<MyComp9799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
