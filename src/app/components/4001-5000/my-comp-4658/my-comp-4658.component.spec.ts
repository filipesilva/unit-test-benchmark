import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4658Component } from './my-comp-4658.component';

describe('MyComp4658Component', () => {
  let component: MyComp4658Component;
  let fixture: ComponentFixture<MyComp4658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
