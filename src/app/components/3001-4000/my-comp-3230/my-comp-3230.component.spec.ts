import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3230Component } from './my-comp-3230.component';

describe('MyComp3230Component', () => {
  let component: MyComp3230Component;
  let fixture: ComponentFixture<MyComp3230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
