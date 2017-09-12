import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4384Component } from './my-comp-4384.component';

describe('MyComp4384Component', () => {
  let component: MyComp4384Component;
  let fixture: ComponentFixture<MyComp4384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
