import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3047Component } from './my-comp-3047.component';

describe('MyComp3047Component', () => {
  let component: MyComp3047Component;
  let fixture: ComponentFixture<MyComp3047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
