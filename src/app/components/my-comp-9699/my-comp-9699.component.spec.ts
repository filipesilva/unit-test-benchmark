import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9699Component } from './my-comp-9699.component';

describe('MyComp9699Component', () => {
  let component: MyComp9699Component;
  let fixture: ComponentFixture<MyComp9699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
