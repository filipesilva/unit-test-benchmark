import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4741Component } from './my-comp-4741.component';

describe('MyComp4741Component', () => {
  let component: MyComp4741Component;
  let fixture: ComponentFixture<MyComp4741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
