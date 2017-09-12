import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3018Component } from './my-comp-3018.component';

describe('MyComp3018Component', () => {
  let component: MyComp3018Component;
  let fixture: ComponentFixture<MyComp3018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
