import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp607Component } from './my-comp-607.component';

describe('MyComp607Component', () => {
  let component: MyComp607Component;
  let fixture: ComponentFixture<MyComp607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
