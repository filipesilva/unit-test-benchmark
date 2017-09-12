import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6745Component } from './my-comp-6745.component';

describe('MyComp6745Component', () => {
  let component: MyComp6745Component;
  let fixture: ComponentFixture<MyComp6745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
