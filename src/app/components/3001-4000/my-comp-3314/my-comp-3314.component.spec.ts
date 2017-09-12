import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3314Component } from './my-comp-3314.component';

describe('MyComp3314Component', () => {
  let component: MyComp3314Component;
  let fixture: ComponentFixture<MyComp3314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
