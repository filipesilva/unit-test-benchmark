import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp81Component } from './my-comp-81.component';

describe('MyComp81Component', () => {
  let component: MyComp81Component;
  let fixture: ComponentFixture<MyComp81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
