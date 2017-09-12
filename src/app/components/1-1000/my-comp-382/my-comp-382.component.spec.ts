import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp382Component } from './my-comp-382.component';

describe('MyComp382Component', () => {
  let component: MyComp382Component;
  let fixture: ComponentFixture<MyComp382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
