import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9135Component } from './my-comp-9135.component';

describe('MyComp9135Component', () => {
  let component: MyComp9135Component;
  let fixture: ComponentFixture<MyComp9135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
