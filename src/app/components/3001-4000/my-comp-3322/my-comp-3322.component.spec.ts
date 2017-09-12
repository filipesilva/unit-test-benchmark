import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3322Component } from './my-comp-3322.component';

describe('MyComp3322Component', () => {
  let component: MyComp3322Component;
  let fixture: ComponentFixture<MyComp3322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
