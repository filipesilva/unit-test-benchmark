import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4004Component } from './my-comp-4004.component';

describe('MyComp4004Component', () => {
  let component: MyComp4004Component;
  let fixture: ComponentFixture<MyComp4004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
