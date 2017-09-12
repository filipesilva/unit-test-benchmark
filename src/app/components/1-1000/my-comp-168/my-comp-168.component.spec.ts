import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp168Component } from './my-comp-168.component';

describe('MyComp168Component', () => {
  let component: MyComp168Component;
  let fixture: ComponentFixture<MyComp168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
