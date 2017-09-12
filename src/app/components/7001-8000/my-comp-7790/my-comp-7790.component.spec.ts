import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7790Component } from './my-comp-7790.component';

describe('MyComp7790Component', () => {
  let component: MyComp7790Component;
  let fixture: ComponentFixture<MyComp7790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
