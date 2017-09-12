import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5544Component } from './my-comp-5544.component';

describe('MyComp5544Component', () => {
  let component: MyComp5544Component;
  let fixture: ComponentFixture<MyComp5544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
