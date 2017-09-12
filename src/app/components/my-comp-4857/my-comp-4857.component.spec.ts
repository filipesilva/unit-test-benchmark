import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4857Component } from './my-comp-4857.component';

describe('MyComp4857Component', () => {
  let component: MyComp4857Component;
  let fixture: ComponentFixture<MyComp4857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
