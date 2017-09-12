import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9975Component } from './my-comp-9975.component';

describe('MyComp9975Component', () => {
  let component: MyComp9975Component;
  let fixture: ComponentFixture<MyComp9975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
