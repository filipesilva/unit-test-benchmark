import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9267Component } from './my-comp-9267.component';

describe('MyComp9267Component', () => {
  let component: MyComp9267Component;
  let fixture: ComponentFixture<MyComp9267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
