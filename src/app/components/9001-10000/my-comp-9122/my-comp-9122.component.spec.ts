import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9122Component } from './my-comp-9122.component';

describe('MyComp9122Component', () => {
  let component: MyComp9122Component;
  let fixture: ComponentFixture<MyComp9122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
