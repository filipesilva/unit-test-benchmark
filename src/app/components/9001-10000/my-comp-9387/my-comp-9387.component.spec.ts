import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9387Component } from './my-comp-9387.component';

describe('MyComp9387Component', () => {
  let component: MyComp9387Component;
  let fixture: ComponentFixture<MyComp9387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
