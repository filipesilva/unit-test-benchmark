import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9925Component } from './my-comp-9925.component';

describe('MyComp9925Component', () => {
  let component: MyComp9925Component;
  let fixture: ComponentFixture<MyComp9925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
