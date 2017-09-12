import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7658Component } from './my-comp-7658.component';

describe('MyComp7658Component', () => {
  let component: MyComp7658Component;
  let fixture: ComponentFixture<MyComp7658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
