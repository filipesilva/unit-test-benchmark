import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9441Component } from './my-comp-9441.component';

describe('MyComp9441Component', () => {
  let component: MyComp9441Component;
  let fixture: ComponentFixture<MyComp9441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
