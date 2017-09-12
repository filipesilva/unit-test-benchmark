import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4477Component } from './my-comp-4477.component';

describe('MyComp4477Component', () => {
  let component: MyComp4477Component;
  let fixture: ComponentFixture<MyComp4477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
