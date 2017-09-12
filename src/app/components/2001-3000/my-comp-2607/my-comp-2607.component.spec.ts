import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2607Component } from './my-comp-2607.component';

describe('MyComp2607Component', () => {
  let component: MyComp2607Component;
  let fixture: ComponentFixture<MyComp2607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
