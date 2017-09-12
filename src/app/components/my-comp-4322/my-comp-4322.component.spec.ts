import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4322Component } from './my-comp-4322.component';

describe('MyComp4322Component', () => {
  let component: MyComp4322Component;
  let fixture: ComponentFixture<MyComp4322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
