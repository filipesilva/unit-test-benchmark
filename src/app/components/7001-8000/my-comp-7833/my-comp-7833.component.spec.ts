import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7833Component } from './my-comp-7833.component';

describe('MyComp7833Component', () => {
  let component: MyComp7833Component;
  let fixture: ComponentFixture<MyComp7833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
