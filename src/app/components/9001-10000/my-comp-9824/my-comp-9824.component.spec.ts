import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9824Component } from './my-comp-9824.component';

describe('MyComp9824Component', () => {
  let component: MyComp9824Component;
  let fixture: ComponentFixture<MyComp9824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
