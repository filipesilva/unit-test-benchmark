import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9512Component } from './my-comp-9512.component';

describe('MyComp9512Component', () => {
  let component: MyComp9512Component;
  let fixture: ComponentFixture<MyComp9512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
