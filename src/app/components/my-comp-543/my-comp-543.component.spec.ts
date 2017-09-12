import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp543Component } from './my-comp-543.component';

describe('MyComp543Component', () => {
  let component: MyComp543Component;
  let fixture: ComponentFixture<MyComp543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
