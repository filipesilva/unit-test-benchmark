import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4968Component } from './my-comp-4968.component';

describe('MyComp4968Component', () => {
  let component: MyComp4968Component;
  let fixture: ComponentFixture<MyComp4968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
