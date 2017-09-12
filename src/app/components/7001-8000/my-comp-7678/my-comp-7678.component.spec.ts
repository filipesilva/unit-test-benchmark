import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7678Component } from './my-comp-7678.component';

describe('MyComp7678Component', () => {
  let component: MyComp7678Component;
  let fixture: ComponentFixture<MyComp7678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
