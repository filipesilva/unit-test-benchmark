import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7028Component } from './my-comp-7028.component';

describe('MyComp7028Component', () => {
  let component: MyComp7028Component;
  let fixture: ComponentFixture<MyComp7028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
