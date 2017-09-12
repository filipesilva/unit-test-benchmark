import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4208Component } from './my-comp-4208.component';

describe('MyComp4208Component', () => {
  let component: MyComp4208Component;
  let fixture: ComponentFixture<MyComp4208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
