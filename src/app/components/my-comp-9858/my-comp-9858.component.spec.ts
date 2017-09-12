import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9858Component } from './my-comp-9858.component';

describe('MyComp9858Component', () => {
  let component: MyComp9858Component;
  let fixture: ComponentFixture<MyComp9858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
