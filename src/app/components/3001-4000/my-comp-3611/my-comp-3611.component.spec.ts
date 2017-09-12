import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3611Component } from './my-comp-3611.component';

describe('MyComp3611Component', () => {
  let component: MyComp3611Component;
  let fixture: ComponentFixture<MyComp3611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
