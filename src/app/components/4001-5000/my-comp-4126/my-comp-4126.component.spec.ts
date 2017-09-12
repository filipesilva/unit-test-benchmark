import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4126Component } from './my-comp-4126.component';

describe('MyComp4126Component', () => {
  let component: MyComp4126Component;
  let fixture: ComponentFixture<MyComp4126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
