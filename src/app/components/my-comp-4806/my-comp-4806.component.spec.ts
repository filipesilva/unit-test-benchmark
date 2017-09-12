import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4806Component } from './my-comp-4806.component';

describe('MyComp4806Component', () => {
  let component: MyComp4806Component;
  let fixture: ComponentFixture<MyComp4806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
