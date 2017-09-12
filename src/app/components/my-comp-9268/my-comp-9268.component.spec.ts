import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9268Component } from './my-comp-9268.component';

describe('MyComp9268Component', () => {
  let component: MyComp9268Component;
  let fixture: ComponentFixture<MyComp9268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
