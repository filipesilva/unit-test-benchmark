import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4426Component } from './my-comp-4426.component';

describe('MyComp4426Component', () => {
  let component: MyComp4426Component;
  let fixture: ComponentFixture<MyComp4426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
