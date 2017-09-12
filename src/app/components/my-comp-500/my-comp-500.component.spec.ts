import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp500Component } from './my-comp-500.component';

describe('MyComp500Component', () => {
  let component: MyComp500Component;
  let fixture: ComponentFixture<MyComp500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
