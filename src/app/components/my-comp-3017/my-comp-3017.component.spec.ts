import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3017Component } from './my-comp-3017.component';

describe('MyComp3017Component', () => {
  let component: MyComp3017Component;
  let fixture: ComponentFixture<MyComp3017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
