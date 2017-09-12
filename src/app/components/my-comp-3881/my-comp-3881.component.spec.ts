import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3881Component } from './my-comp-3881.component';

describe('MyComp3881Component', () => {
  let component: MyComp3881Component;
  let fixture: ComponentFixture<MyComp3881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
