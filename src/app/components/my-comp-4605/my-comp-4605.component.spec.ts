import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4605Component } from './my-comp-4605.component';

describe('MyComp4605Component', () => {
  let component: MyComp4605Component;
  let fixture: ComponentFixture<MyComp4605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
