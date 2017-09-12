import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9473Component } from './my-comp-9473.component';

describe('MyComp9473Component', () => {
  let component: MyComp9473Component;
  let fixture: ComponentFixture<MyComp9473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
