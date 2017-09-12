import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9002Component } from './my-comp-9002.component';

describe('MyComp9002Component', () => {
  let component: MyComp9002Component;
  let fixture: ComponentFixture<MyComp9002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
