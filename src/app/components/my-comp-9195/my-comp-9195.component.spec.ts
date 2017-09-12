import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9195Component } from './my-comp-9195.component';

describe('MyComp9195Component', () => {
  let component: MyComp9195Component;
  let fixture: ComponentFixture<MyComp9195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
