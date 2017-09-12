import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4698Component } from './my-comp-4698.component';

describe('MyComp4698Component', () => {
  let component: MyComp4698Component;
  let fixture: ComponentFixture<MyComp4698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
