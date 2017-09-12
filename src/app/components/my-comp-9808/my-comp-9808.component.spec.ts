import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9808Component } from './my-comp-9808.component';

describe('MyComp9808Component', () => {
  let component: MyComp9808Component;
  let fixture: ComponentFixture<MyComp9808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
