import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9398Component } from './my-comp-9398.component';

describe('MyComp9398Component', () => {
  let component: MyComp9398Component;
  let fixture: ComponentFixture<MyComp9398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
