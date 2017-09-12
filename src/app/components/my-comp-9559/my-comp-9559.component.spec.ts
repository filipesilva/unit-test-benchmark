import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9559Component } from './my-comp-9559.component';

describe('MyComp9559Component', () => {
  let component: MyComp9559Component;
  let fixture: ComponentFixture<MyComp9559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
