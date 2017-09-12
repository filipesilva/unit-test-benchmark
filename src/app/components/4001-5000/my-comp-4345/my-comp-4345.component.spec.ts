import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4345Component } from './my-comp-4345.component';

describe('MyComp4345Component', () => {
  let component: MyComp4345Component;
  let fixture: ComponentFixture<MyComp4345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
