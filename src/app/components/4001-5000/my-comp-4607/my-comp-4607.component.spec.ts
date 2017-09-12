import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4607Component } from './my-comp-4607.component';

describe('MyComp4607Component', () => {
  let component: MyComp4607Component;
  let fixture: ComponentFixture<MyComp4607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
