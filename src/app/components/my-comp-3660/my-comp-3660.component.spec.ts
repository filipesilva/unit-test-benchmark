import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3660Component } from './my-comp-3660.component';

describe('MyComp3660Component', () => {
  let component: MyComp3660Component;
  let fixture: ComponentFixture<MyComp3660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
