import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4943Component } from './my-comp-4943.component';

describe('MyComp4943Component', () => {
  let component: MyComp4943Component;
  let fixture: ComponentFixture<MyComp4943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
