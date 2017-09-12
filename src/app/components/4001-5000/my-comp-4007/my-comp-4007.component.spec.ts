import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4007Component } from './my-comp-4007.component';

describe('MyComp4007Component', () => {
  let component: MyComp4007Component;
  let fixture: ComponentFixture<MyComp4007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
