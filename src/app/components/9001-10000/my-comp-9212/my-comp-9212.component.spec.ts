import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9212Component } from './my-comp-9212.component';

describe('MyComp9212Component', () => {
  let component: MyComp9212Component;
  let fixture: ComponentFixture<MyComp9212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
