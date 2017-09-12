import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3386Component } from './my-comp-3386.component';

describe('MyComp3386Component', () => {
  let component: MyComp3386Component;
  let fixture: ComponentFixture<MyComp3386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
