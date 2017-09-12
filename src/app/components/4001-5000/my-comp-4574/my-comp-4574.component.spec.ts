import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4574Component } from './my-comp-4574.component';

describe('MyComp4574Component', () => {
  let component: MyComp4574Component;
  let fixture: ComponentFixture<MyComp4574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
