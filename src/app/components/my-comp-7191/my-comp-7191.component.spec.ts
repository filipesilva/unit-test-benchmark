import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7191Component } from './my-comp-7191.component';

describe('MyComp7191Component', () => {
  let component: MyComp7191Component;
  let fixture: ComponentFixture<MyComp7191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
