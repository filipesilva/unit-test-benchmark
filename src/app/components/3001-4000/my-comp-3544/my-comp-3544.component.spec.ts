import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3544Component } from './my-comp-3544.component';

describe('MyComp3544Component', () => {
  let component: MyComp3544Component;
  let fixture: ComponentFixture<MyComp3544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
