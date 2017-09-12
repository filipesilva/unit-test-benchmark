import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4659Component } from './my-comp-4659.component';

describe('MyComp4659Component', () => {
  let component: MyComp4659Component;
  let fixture: ComponentFixture<MyComp4659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
