import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4357Component } from './my-comp-4357.component';

describe('MyComp4357Component', () => {
  let component: MyComp4357Component;
  let fixture: ComponentFixture<MyComp4357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
