import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9534Component } from './my-comp-9534.component';

describe('MyComp9534Component', () => {
  let component: MyComp9534Component;
  let fixture: ComponentFixture<MyComp9534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
