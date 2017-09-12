import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9272Component } from './my-comp-9272.component';

describe('MyComp9272Component', () => {
  let component: MyComp9272Component;
  let fixture: ComponentFixture<MyComp9272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
