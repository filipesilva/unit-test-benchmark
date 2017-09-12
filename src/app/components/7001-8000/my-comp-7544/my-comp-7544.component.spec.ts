import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7544Component } from './my-comp-7544.component';

describe('MyComp7544Component', () => {
  let component: MyComp7544Component;
  let fixture: ComponentFixture<MyComp7544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
