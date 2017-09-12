import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7534Component } from './my-comp-7534.component';

describe('MyComp7534Component', () => {
  let component: MyComp7534Component;
  let fixture: ComponentFixture<MyComp7534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
