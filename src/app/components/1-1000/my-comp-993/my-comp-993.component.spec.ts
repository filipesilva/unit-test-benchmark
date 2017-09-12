import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp993Component } from './my-comp-993.component';

describe('MyComp993Component', () => {
  let component: MyComp993Component;
  let fixture: ComponentFixture<MyComp993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
