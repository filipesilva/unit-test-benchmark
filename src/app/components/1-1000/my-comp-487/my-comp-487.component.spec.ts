import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp487Component } from './my-comp-487.component';

describe('MyComp487Component', () => {
  let component: MyComp487Component;
  let fixture: ComponentFixture<MyComp487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
