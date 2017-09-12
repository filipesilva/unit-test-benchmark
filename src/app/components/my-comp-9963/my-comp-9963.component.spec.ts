import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9963Component } from './my-comp-9963.component';

describe('MyComp9963Component', () => {
  let component: MyComp9963Component;
  let fixture: ComponentFixture<MyComp9963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
