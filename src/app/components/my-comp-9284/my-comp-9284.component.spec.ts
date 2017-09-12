import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9284Component } from './my-comp-9284.component';

describe('MyComp9284Component', () => {
  let component: MyComp9284Component;
  let fixture: ComponentFixture<MyComp9284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
