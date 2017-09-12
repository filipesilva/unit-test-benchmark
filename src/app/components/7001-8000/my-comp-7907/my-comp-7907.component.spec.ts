import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7907Component } from './my-comp-7907.component';

describe('MyComp7907Component', () => {
  let component: MyComp7907Component;
  let fixture: ComponentFixture<MyComp7907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
