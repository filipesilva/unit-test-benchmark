import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4774Component } from './my-comp-4774.component';

describe('MyComp4774Component', () => {
  let component: MyComp4774Component;
  let fixture: ComponentFixture<MyComp4774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
