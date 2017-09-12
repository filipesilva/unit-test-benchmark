import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3637Component } from './my-comp-3637.component';

describe('MyComp3637Component', () => {
  let component: MyComp3637Component;
  let fixture: ComponentFixture<MyComp3637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
