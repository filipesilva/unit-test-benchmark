import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5416Component } from './my-comp-5416.component';

describe('MyComp5416Component', () => {
  let component: MyComp5416Component;
  let fixture: ComponentFixture<MyComp5416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
