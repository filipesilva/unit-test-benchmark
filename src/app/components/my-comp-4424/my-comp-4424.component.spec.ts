import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4424Component } from './my-comp-4424.component';

describe('MyComp4424Component', () => {
  let component: MyComp4424Component;
  let fixture: ComponentFixture<MyComp4424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
