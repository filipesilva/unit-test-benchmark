import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9774Component } from './my-comp-9774.component';

describe('MyComp9774Component', () => {
  let component: MyComp9774Component;
  let fixture: ComponentFixture<MyComp9774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
