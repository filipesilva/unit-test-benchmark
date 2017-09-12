import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4454Component } from './my-comp-4454.component';

describe('MyComp4454Component', () => {
  let component: MyComp4454Component;
  let fixture: ComponentFixture<MyComp4454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
