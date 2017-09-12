import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4928Component } from './my-comp-4928.component';

describe('MyComp4928Component', () => {
  let component: MyComp4928Component;
  let fixture: ComponentFixture<MyComp4928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
