import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp502Component } from './my-comp-502.component';

describe('MyComp502Component', () => {
  let component: MyComp502Component;
  let fixture: ComponentFixture<MyComp502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
