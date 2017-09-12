import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4743Component } from './my-comp-4743.component';

describe('MyComp4743Component', () => {
  let component: MyComp4743Component;
  let fixture: ComponentFixture<MyComp4743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
