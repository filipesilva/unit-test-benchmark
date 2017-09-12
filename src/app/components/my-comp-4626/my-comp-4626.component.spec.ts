import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4626Component } from './my-comp-4626.component';

describe('MyComp4626Component', () => {
  let component: MyComp4626Component;
  let fixture: ComponentFixture<MyComp4626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
