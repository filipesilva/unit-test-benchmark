import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3461Component } from './my-comp-3461.component';

describe('MyComp3461Component', () => {
  let component: MyComp3461Component;
  let fixture: ComponentFixture<MyComp3461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
