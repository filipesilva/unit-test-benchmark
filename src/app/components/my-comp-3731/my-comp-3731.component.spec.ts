import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3731Component } from './my-comp-3731.component';

describe('MyComp3731Component', () => {
  let component: MyComp3731Component;
  let fixture: ComponentFixture<MyComp3731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
