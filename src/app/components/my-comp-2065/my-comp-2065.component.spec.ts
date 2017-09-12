import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2065Component } from './my-comp-2065.component';

describe('MyComp2065Component', () => {
  let component: MyComp2065Component;
  let fixture: ComponentFixture<MyComp2065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
