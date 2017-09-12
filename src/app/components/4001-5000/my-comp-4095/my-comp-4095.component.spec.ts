import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4095Component } from './my-comp-4095.component';

describe('MyComp4095Component', () => {
  let component: MyComp4095Component;
  let fixture: ComponentFixture<MyComp4095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
