import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4120Component } from './my-comp-4120.component';

describe('MyComp4120Component', () => {
  let component: MyComp4120Component;
  let fixture: ComponentFixture<MyComp4120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
