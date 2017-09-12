import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7549Component } from './my-comp-7549.component';

describe('MyComp7549Component', () => {
  let component: MyComp7549Component;
  let fixture: ComponentFixture<MyComp7549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
