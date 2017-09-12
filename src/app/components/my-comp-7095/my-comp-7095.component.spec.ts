import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7095Component } from './my-comp-7095.component';

describe('MyComp7095Component', () => {
  let component: MyComp7095Component;
  let fixture: ComponentFixture<MyComp7095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
