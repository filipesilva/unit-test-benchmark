import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9739Component } from './my-comp-9739.component';

describe('MyComp9739Component', () => {
  let component: MyComp9739Component;
  let fixture: ComponentFixture<MyComp9739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
