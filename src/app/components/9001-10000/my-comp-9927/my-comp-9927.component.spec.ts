import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9927Component } from './my-comp-9927.component';

describe('MyComp9927Component', () => {
  let component: MyComp9927Component;
  let fixture: ComponentFixture<MyComp9927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
