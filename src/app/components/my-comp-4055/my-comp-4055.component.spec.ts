import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4055Component } from './my-comp-4055.component';

describe('MyComp4055Component', () => {
  let component: MyComp4055Component;
  let fixture: ComponentFixture<MyComp4055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
