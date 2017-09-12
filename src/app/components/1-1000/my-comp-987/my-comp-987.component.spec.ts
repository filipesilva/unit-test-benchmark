import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp987Component } from './my-comp-987.component';

describe('MyComp987Component', () => {
  let component: MyComp987Component;
  let fixture: ComponentFixture<MyComp987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
