import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4196Component } from './my-comp-4196.component';

describe('MyComp4196Component', () => {
  let component: MyComp4196Component;
  let fixture: ComponentFixture<MyComp4196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
