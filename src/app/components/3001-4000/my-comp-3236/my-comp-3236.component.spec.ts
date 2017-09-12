import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3236Component } from './my-comp-3236.component';

describe('MyComp3236Component', () => {
  let component: MyComp3236Component;
  let fixture: ComponentFixture<MyComp3236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
