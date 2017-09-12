import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4204Component } from './my-comp-4204.component';

describe('MyComp4204Component', () => {
  let component: MyComp4204Component;
  let fixture: ComponentFixture<MyComp4204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
