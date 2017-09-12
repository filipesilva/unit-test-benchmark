import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7882Component } from './my-comp-7882.component';

describe('MyComp7882Component', () => {
  let component: MyComp7882Component;
  let fixture: ComponentFixture<MyComp7882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
