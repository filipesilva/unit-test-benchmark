import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3208Component } from './my-comp-3208.component';

describe('MyComp3208Component', () => {
  let component: MyComp3208Component;
  let fixture: ComponentFixture<MyComp3208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
