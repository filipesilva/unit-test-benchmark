import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3859Component } from './my-comp-3859.component';

describe('MyComp3859Component', () => {
  let component: MyComp3859Component;
  let fixture: ComponentFixture<MyComp3859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
