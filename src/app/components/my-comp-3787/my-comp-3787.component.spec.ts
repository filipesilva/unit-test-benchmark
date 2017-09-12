import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3787Component } from './my-comp-3787.component';

describe('MyComp3787Component', () => {
  let component: MyComp3787Component;
  let fixture: ComponentFixture<MyComp3787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
