import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7453Component } from './my-comp-7453.component';

describe('MyComp7453Component', () => {
  let component: MyComp7453Component;
  let fixture: ComponentFixture<MyComp7453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
