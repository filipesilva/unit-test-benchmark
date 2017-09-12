import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7774Component } from './my-comp-7774.component';

describe('MyComp7774Component', () => {
  let component: MyComp7774Component;
  let fixture: ComponentFixture<MyComp7774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
