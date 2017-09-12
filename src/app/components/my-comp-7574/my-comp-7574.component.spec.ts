import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7574Component } from './my-comp-7574.component';

describe('MyComp7574Component', () => {
  let component: MyComp7574Component;
  let fixture: ComponentFixture<MyComp7574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
