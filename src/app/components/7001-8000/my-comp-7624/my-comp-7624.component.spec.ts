import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7624Component } from './my-comp-7624.component';

describe('MyComp7624Component', () => {
  let component: MyComp7624Component;
  let fixture: ComponentFixture<MyComp7624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
