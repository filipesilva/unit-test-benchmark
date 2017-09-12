import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4186Component } from './my-comp-4186.component';

describe('MyComp4186Component', () => {
  let component: MyComp4186Component;
  let fixture: ComponentFixture<MyComp4186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
