import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9875Component } from './my-comp-9875.component';

describe('MyComp9875Component', () => {
  let component: MyComp9875Component;
  let fixture: ComponentFixture<MyComp9875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
