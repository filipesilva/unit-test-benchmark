import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9608Component } from './my-comp-9608.component';

describe('MyComp9608Component', () => {
  let component: MyComp9608Component;
  let fixture: ComponentFixture<MyComp9608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
