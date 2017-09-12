import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9489Component } from './my-comp-9489.component';

describe('MyComp9489Component', () => {
  let component: MyComp9489Component;
  let fixture: ComponentFixture<MyComp9489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
