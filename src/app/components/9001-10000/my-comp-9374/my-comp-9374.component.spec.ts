import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9374Component } from './my-comp-9374.component';

describe('MyComp9374Component', () => {
  let component: MyComp9374Component;
  let fixture: ComponentFixture<MyComp9374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
