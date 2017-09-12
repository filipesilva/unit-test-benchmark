import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8774Component } from './my-comp-8774.component';

describe('MyComp8774Component', () => {
  let component: MyComp8774Component;
  let fixture: ComponentFixture<MyComp8774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
