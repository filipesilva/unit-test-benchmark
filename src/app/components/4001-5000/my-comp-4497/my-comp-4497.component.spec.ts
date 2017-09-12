import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4497Component } from './my-comp-4497.component';

describe('MyComp4497Component', () => {
  let component: MyComp4497Component;
  let fixture: ComponentFixture<MyComp4497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
