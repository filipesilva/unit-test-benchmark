import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7431Component } from './my-comp-7431.component';

describe('MyComp7431Component', () => {
  let component: MyComp7431Component;
  let fixture: ComponentFixture<MyComp7431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
