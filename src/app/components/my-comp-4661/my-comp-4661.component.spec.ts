import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4661Component } from './my-comp-4661.component';

describe('MyComp4661Component', () => {
  let component: MyComp4661Component;
  let fixture: ComponentFixture<MyComp4661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
