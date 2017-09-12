import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5607Component } from './my-comp-5607.component';

describe('MyComp5607Component', () => {
  let component: MyComp5607Component;
  let fixture: ComponentFixture<MyComp5607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
