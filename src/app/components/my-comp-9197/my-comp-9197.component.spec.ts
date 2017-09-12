import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9197Component } from './my-comp-9197.component';

describe('MyComp9197Component', () => {
  let component: MyComp9197Component;
  let fixture: ComponentFixture<MyComp9197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
