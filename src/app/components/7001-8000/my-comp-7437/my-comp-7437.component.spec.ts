import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7437Component } from './my-comp-7437.component';

describe('MyComp7437Component', () => {
  let component: MyComp7437Component;
  let fixture: ComponentFixture<MyComp7437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
