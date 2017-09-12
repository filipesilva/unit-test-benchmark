import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4157Component } from './my-comp-4157.component';

describe('MyComp4157Component', () => {
  let component: MyComp4157Component;
  let fixture: ComponentFixture<MyComp4157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
