import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3302Component } from './my-comp-3302.component';

describe('MyComp3302Component', () => {
  let component: MyComp3302Component;
  let fixture: ComponentFixture<MyComp3302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
