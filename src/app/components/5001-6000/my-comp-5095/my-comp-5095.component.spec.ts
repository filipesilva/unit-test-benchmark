import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5095Component } from './my-comp-5095.component';

describe('MyComp5095Component', () => {
  let component: MyComp5095Component;
  let fixture: ComponentFixture<MyComp5095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
