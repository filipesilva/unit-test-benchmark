import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7035Component } from './my-comp-7035.component';

describe('MyComp7035Component', () => {
  let component: MyComp7035Component;
  let fixture: ComponentFixture<MyComp7035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
