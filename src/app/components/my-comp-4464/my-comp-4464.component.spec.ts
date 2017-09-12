import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4464Component } from './my-comp-4464.component';

describe('MyComp4464Component', () => {
  let component: MyComp4464Component;
  let fixture: ComponentFixture<MyComp4464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
