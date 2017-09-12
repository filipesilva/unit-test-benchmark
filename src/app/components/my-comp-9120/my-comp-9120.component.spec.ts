import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9120Component } from './my-comp-9120.component';

describe('MyComp9120Component', () => {
  let component: MyComp9120Component;
  let fixture: ComponentFixture<MyComp9120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
