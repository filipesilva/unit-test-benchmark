import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2559Component } from './my-comp-2559.component';

describe('MyComp2559Component', () => {
  let component: MyComp2559Component;
  let fixture: ComponentFixture<MyComp2559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
