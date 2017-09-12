import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4307Component } from './my-comp-4307.component';

describe('MyComp4307Component', () => {
  let component: MyComp4307Component;
  let fixture: ComponentFixture<MyComp4307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
