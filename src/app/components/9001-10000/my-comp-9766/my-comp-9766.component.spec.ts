import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9766Component } from './my-comp-9766.component';

describe('MyComp9766Component', () => {
  let component: MyComp9766Component;
  let fixture: ComponentFixture<MyComp9766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
