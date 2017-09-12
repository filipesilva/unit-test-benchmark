import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9961Component } from './my-comp-9961.component';

describe('MyComp9961Component', () => {
  let component: MyComp9961Component;
  let fixture: ComponentFixture<MyComp9961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
