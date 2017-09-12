import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp416Component } from './my-comp-416.component';

describe('MyComp416Component', () => {
  let component: MyComp416Component;
  let fixture: ComponentFixture<MyComp416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
