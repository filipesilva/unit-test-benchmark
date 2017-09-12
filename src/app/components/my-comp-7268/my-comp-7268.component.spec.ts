import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7268Component } from './my-comp-7268.component';

describe('MyComp7268Component', () => {
  let component: MyComp7268Component;
  let fixture: ComponentFixture<MyComp7268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
